// import { app } from '../application'
import type { Application } from '../application'
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
    async handle(event: IEvent, app: Application): Promise<void> {
        console.log('save readog event', event, app)
        console.log('save success, notify content script')
        // send event to content script telling it we're saved

        // app.storage?.dispatch({} as ILink)

        const { tabID } = event
        app.event?.sendEventToContentScript(tabID as number, EVENT_SAVE_STATUS, {
            errors: [],
        })
    }
}
