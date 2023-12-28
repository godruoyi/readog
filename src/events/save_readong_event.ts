import { Application } from '../application'
import type { IEvent, IListener } from './event'
import { EVENT_SAVE_STATUS } from './event'

export class SavingEvent implements IListener {
    async handle(event: IEvent): Promise<void> {
        console.log('saving event', event)
    }
}

export class SavedEvent implements IListener {
    async handle(event: IEvent): Promise<void> {
        console.log('saved event', event)
    }
}

export class SaveReadogEvent implements IListener {
    async handle(event: IEvent): Promise<void> {
        const app = await Application.getInstance()
        console.log('save readog event', event)
        console.log('save success, notify content script')
        // send event to content script telling it we're saved

        const { tabID } = event

        app.event?.background.sendEventToContentScript(tabID as number, {
            type: EVENT_SAVE_STATUS,
            errors: [],
        })

        // app.event?.contentScript.sendEvent('saved_readog', event)
    }
}
