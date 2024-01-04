import browser from 'webextension-polyfill'
import type { IStorage } from '../storage'
import type { IConfig, IError, ILink } from '../../types'
import { getProviderSettings } from '../../supports/storage'

export class BearStorage implements IStorage {
    async config(): Promise<IConfig> {
        return await getProviderSettings('bear')
    }

    async store(link: ILink, config: IConfig): Promise<IError | void> {
        return await this.storeViaXCallbackUrl(link, config)
    }

    private async storeViaXCallbackUrl(link: ILink, config: IConfig): Promise<void> {
        const url = this.prepareXCallbackUrl(link, config)

        await browser.tabs.update({
            url,
        })
    }

    private prepareXCallbackUrl(link: ILink, config: IConfig): string {
        const allInOne = config.allInOne ?? false

        if (allInOne) {
            return this.prepareAddTextUrl(link, config)
        }

        return this.prepareCreateUrl(link, config)
    }

    private prepareCreateUrl(link: ILink, config: IConfig): string {
        const folder = config.folder ?? 'Readog'
        const tags = this.parseTagsFromFolder(folder).join(',')
        const title = (link.title ?? link.selectionText ?? link.url)
        const text = (`${link.selectionText}\n${link.url}`)

        const url = new URL('bear://x-callback-url/create')
        url.searchParams.append('title', title)
        url.searchParams.append('text', text)
        url.searchParams.append('tags', tags)
        url.searchParams.append('show_window', config.showWindow ? 'yes' : 'no')
        url.searchParams.append('open_note', config.showWindow ? 'yes' : 'no')

        return url.toString()
    }

    private prepareAddTextUrl(link: ILink, config: IConfig): string {
        const text = (`${link.selectionText}\n${link.url}`)
        const url = new URL('bear://x-callback-url/add-text')

        url.searchParams.append('id', config.identifier ?? '')
        url.searchParams.append('text', text)
        url.searchParams.append('show_window', config.showWindow ? 'yes' : 'no')
        url.searchParams.append('open_note', config.showWindow ? 'yes' : 'no')

        return url.toString()
    }

    private parseTagsFromFolder(folder: string): string[] {
        // @todo support multiple tags
        return [(folder)]
    }
}
