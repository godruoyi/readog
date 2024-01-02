// import { app } from '../application'
import type { Application } from '../application'
import type { ILink } from '../types'
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
        console.log('save readog event', event)

        const errors = await app.storage?.dispatch(event.payload as ILink)

        const { tabID } = event

        // notify content script that the link has been saved
        app.event?.sendEventToContentScript(tabID as number, EVENT_SAVE_STATUS, {
            errors,
        })
    }
}
