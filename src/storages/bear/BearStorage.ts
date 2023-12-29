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
        const url = this.prepareCreateXCallbackUrl(link, config.folder ?? 'Readog')

        await browser.tabs.update({
            url,
        })
    }

    private prepareCreateXCallbackUrl(link: ILink, folder: string): string {
        const title = encodeURIComponent(link.title ?? link.selectionText ?? link.url)
        const text = encodeURIComponent(`${link.selectionText}\n${link.url}`)
        const tags = this.parseTagsFromFolder(folder).join(',')

        return `bear://x-callback-url/create?title=${title}&text=${text}&tags=${tags}`
    }

    private parseTagsFromFolder(folder: string): string[] {
        // @todo support multiple tags
        return [encodeURIComponent(folder)]
    }
}
