import browser from 'webextension-polyfill'
import type { IEvent, IListener } from './event'

export class OpenOptionEventListener implements IListener {
    public async handle(event: IEvent): Promise<void> {
        await browser.runtime.openOptionsPage()
    }
}
