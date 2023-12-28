import browser from 'webextension-polyfill'
import type { IServiceProvider } from '../types'
import type { Application } from '../application'
import { OpenOptionEventListener } from './open_popup_event'
import { SaveReadogEvent, SavedEvent, SavingEvent } from './save_readong_event'

export interface IEvent extends Record<string, any> {
    type: IEventType
}

export interface IListener {
    handle(event: IEvent): Promise<void>
}

export type IEventType = string
export const EVENT_OPEN_POPUP: IEventType = 'open_popup'
export const EVENT_SAVE_STATUS: IEventType = 'save_status'

export const EVENT_OPEN_OPTION: IEventType = 'open_option'
export const EVENT_SAVING_READOG: IEventType = 'saving_readog'
export const EVENT_SAVE_READOG: IEventType = 'save_readog'
export const EVENT_SAVED_READOG: IEventType = 'saved_readog'

export class EventServiceProvider implements IServiceProvider {
    private listeners: Record<string, Record<IEventType, IListener[]>> = {
        background: {
            [EVENT_OPEN_OPTION]: [
                new OpenOptionEventListener(),
            ],
            [EVENT_SAVING_READOG]: [
                new SavingEvent(),
            ],
            [EVENT_SAVED_READOG]: [
                new SavedEvent(),
            ],
            [EVENT_SAVE_READOG]: [
                new SaveReadogEvent(),
            ],
        },
    }

    async boot(): Promise<void> {}

    /**
     * Register event manager.
     *
     * @param app
     */
    async register(app: Application): Promise<void> {
        const manager = new EventManager()

        for (const [name, listeners] of Object.entries(this.listeners)) {
            for (const [type, listener] of Object.entries(listeners)) {
                for (const l of listener) {
                    const event = name === 'background' ? manager.background : manager.contentScript
                    event.register(type, l)
                }
            }
        }

        console.log('event manager', manager)

        app.event = manager
    }
}

export class EventManager {
    public contentScript = new ContentScriptEventDispatcher()

    public background = new BackgroundEventDispatcher()
}

abstract class EventDispatcher {
    /**
     * All registered listeners.
     *
     * @protected
     */
    protected listeners: Record<string, IListener[]> = {}

    /**
     * Register an event listener.
     *
     * @param name
     * @param listener
     */
    public register(name: IEventType, listener: IListener) {
        if (!this.listeners[name]) {
            this.listeners[name] = []
        }

        this.listeners[name].push(listener)
    }

    /**
     * Fire an event.
     *
     * @param name
     * @param event
     */
    public async fire(name: IEventType, event: IEvent) {
        if (!this.listeners[name]) {
            return
        }

        for (const listener of this.listeners[name]) {
            await listener.handle(event)
        }
    }
}

class ContentScriptEventDispatcher extends EventDispatcher {
    /**
     * Listen an event that from the background script.
     *
     * @param name
     * @param callback
     * @returns a function that can be used to remove the listener
     */
    public listen(name: IEventType, callback: (event: IEvent) => void): () => void {
        console.log('listen...', name)

        const callbackWrapper = (event: IEvent) => {
            if (event.type === name) {
                callback(event)
            }
        }

        browser.runtime.onMessage.addListener(callbackWrapper)

        return () => {
            browser.runtime.onMessage.removeListener(callbackWrapper)
        }
    }

    /**
     * Send an event to the background script.
     *
     * @param type
     * @param event
     */
    async sendEventToBackground(type: IEventType, event?: IEvent): Promise<void> {
        if (!event) {
            event = { type }
        }

        return await browser.runtime.sendMessage(event)
    }
}

class BackgroundEventDispatcher extends EventDispatcher {
    /**
     * Send an event to the content script.
     *
     * @param tabID
     * @param event
     */
    async sendEventToContentScript(tabID: number, event?: IEvent): Promise<void> {
        console.log('sending event to content script', event, tabID)

        return await browser.tabs.sendMessage(tabID, event)
    }
}
