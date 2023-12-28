import browser from 'webextension-polyfill'
import { fireLinkToDispatcher } from './dispatch'
import type { ILink } from './types'

type IEventType = string

interface IEvent {
    type: IEventType
    payload?: any
}

export const EVENT_OPEN_POPUP: IEventType = 'open_popup'
export const EVENT_OPEN_OPTIONS_PAGE: IEventType = 'open_options_page'
export const EVENT_CREATE_BOOKMARK: IEventType = 'create_bookmark'
export const EVENT_SAVE_READOG: IEventType = 'save_readog'
export const EVENT_SAVE_STATUS: IEventType = 'save_status'

class EventDispatcher {
    private listeners: Record<IEventType, ((event: IEvent) => void)[]> = {}

    public constructor() {
    }

    public fireToContentScript(event: IEvent, tabID: number) {
        browser.tabs.sendMessage(tabID, event)
    }

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

    public fireToBackground(event: IEvent) {
        browser.runtime.sendMessage(event)
    }

    public runBackgroundListener(event: IEvent, tabID: number) {
        if (event.type === EVENT_SAVE_READOG) {
            fireLinkToDispatcher(event.payload as ILink).then((res) => {
                this.fireToContentScript({ type: EVENT_SAVE_STATUS, payload: { errors: res.map(e => e.message) } }, tabID)
            })
        }
        if (event.type === EVENT_OPEN_OPTIONS_PAGE) {
            browser.runtime.openOptionsPage()
        }
    }
}

const event = new EventDispatcher()

export { event, IEvent, IEventType, EventDispatcher }
