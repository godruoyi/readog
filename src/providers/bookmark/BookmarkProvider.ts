import browser from 'webextension-polyfill'
import type { IConfig, IError, ILink, IProvider, IStorage } from '../../types'

export class BookmarkProvider implements IProvider {
    private folderID: string | undefined

    async boot(): Promise<void> {}

    provider(): IStorage {
        return new BookmarkStorage(<string> this.folderID)
    }

    async register(config: IConfig): Promise<void> {
        // this script is running in content script, so we cannot use bookmark api to create folder
        // this folder should be created in Options page that can access the bookmark api
        if (!config || !config.folderID) {
            throw new Error('bookmark folder cannot auto create, please try to re-create it in settings')
        }

        this.folderID = config.folderID
    }
}

class BookmarkStorage implements IStorage {
    constructor(private folderID: string) {}

    async store(link: ILink): Promise<IError | void> {
        return this.sendLinkToBackground(link)
    }

    async sendLinkToBackground(link: ILink) {
        const x = await browser.runtime.sendMessage({
            type: 'create-bookmark',
            payload: {
                folderID: this.folderID,
                ...link,
            },
        })

        console.log('send link to background', x)
    }
}
