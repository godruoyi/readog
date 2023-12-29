import browser from 'webextension-polyfill'
import type { Application } from '../application'
import type { IEvent, IListener } from './event'

export class OpenOptionEventListener implements IListener {
    public async handle(_event: IEvent, _app: Application): Promise<void> {
        await browser.runtime.openOptionsPage()
    }
}
