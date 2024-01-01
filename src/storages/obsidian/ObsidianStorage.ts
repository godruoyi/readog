import browser from 'webextension-polyfill'
import type { IStorage } from '../storage'
import type { IConfig, IError, ILink } from '../../types'
import { getProviderSettings } from '../../supports/storage'

export class ObsidianStorage implements IStorage {
    async config(): Promise<IConfig> {
        return await getProviderSettings('obsidian')
    }

    async store(link: ILink, config: IConfig): Promise<IError | void> {
        if (!config?.vault) {
            return { message: 'Vault is required' } as IError
        }

        return await this.createNote(link, config)
    }

    /**
     * Create note via Obsidian URI
     *
     * @see https://help.obsidian.md/Concepts/Obsidian+URI#Create+note
     *
     * @param link
     * @param config
     */
    async createNote(link: ILink, config: IConfig): Promise<IError | void> {
        const vault = config?.vault as string
        const content = encodeURIComponent(`\n\n${link.selectionText}\n\n${link.url}`)
        const name = encodeURIComponent(link.title ?? link.selectionText ?? link.url)

        const url: string = `obsidian://new?vault=${vault}&content=${content}&name=${name}`

        await browser.tabs.update({
            url,
        })
    }
}
