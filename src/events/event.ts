import browser from 'webextension-polyfill'
import type { IServiceProvider } from '../types'
import type { Application } from '../application'

export interface IEventPayload extends Record<string, any> {}

export interface IEvent {
    type: IEventType
    payload?: IEventPayload
    tabID?: number
}

export interface IListener {
    handle(event: IEvent, app: Application): Promise<void>
}

export type IEventType = string
export const EVENT_OPEN_POPUP: IEventType = 'open_popup'
export const EVENT_SAVE_STATUS: IEventType = 'save_status'

export const EVENT_OPEN_OPTION: IEventType = 'open_option'
export const EVENT_SAVING_READOG: IEventType = 'saving_readog'
export const EVENT_SAVE_READOG: IEventType = 'save_readog'
export const EVENT_SAVED_READOG: IEventType = 'saved_readog'

export class EventServiceProvider implements IServiceProvider {
    boot(): void {}

    /**
     * Register event manager.
     *
     * @param app
     */
    register(app: Application): void {
        app.event = new EventDispatcher(app)
    }
}

export class EventDispatcher {
    public constructor(protected app: Application) {}

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
     * Register listener of all events.
     *
     * @param listeners
     */
    public registerAll(listeners: Record<IEventType, IListener[]>) {
        for (const name in listeners) {
            for (const listener of listeners[name]) {
                this.register(name, listener)
            }
        }
    }

    /**
     * Fire an event.
     *
     * @param event
     */
    public async fire(event: IEvent) {
        if (!this.listeners[event.type]) {
            return
        }

        for (const listener of this.listeners[event.type]) {
            await listener.handle(event, this.app)
        }
    }

    /**
     * Listen an event that from the background script or content script.
     *
     * @param callback
     * @param name
     * @returns a function that can be used to remove the listener
     */
    public listen(callback: (event: IEvent) => void, name?: IEventType): () => void {
        let callbackWrapper = function (event: IEvent) {
            callback(event)
        }

        if (name) {
            callbackWrapper = function (event: IEvent) {
                if (event.type === name) {
                    callback(event)
                }
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
     * @param payload
     */
    async sendEventToBackground(type: IEventType, payload?: IEventPayload): Promise<void> {
        return await browser.runtime.sendMessage({
            type,
            payload,
        })
    }

    /**
     * Send an event to the content script.
     *
     * @param tabID
     * @param type
     * @param payload
     */
    async sendEventToContentScript(tabID: number, type: IEventType, payload?: IEventPayload): Promise<void> {
        return await browser.tabs.sendMessage(tabID, {
            type,
            payload,
        })
    }
}
