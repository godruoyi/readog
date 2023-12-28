import browser from 'webextension-polyfill'
import type { IConfig, IError, ILink, IProvider, IStorage } from '../../types'
import { createOrUpdateBookmarkFolder } from '../../supports/browser'
import { syncProviderSettings } from '../../supports/storage'

export class BookmarkProvider implements IProvider {
    private folderID: string | undefined

    async boot(): Promise<void> {}

    name(): string { return 'bookmark' }

    provider(): IStorage {
        return new BookmarkStorage(this.folderID as string)
    }

    async register(config: IConfig): Promise<void> {
        const folder = config?.folder ?? 'Readog'
        const folderID = config?.folderID

        const f = await createOrUpdateBookmarkFolder(folder, folderID)
        if (folderID && folderID !== f.id) {
            await syncProviderSettings(this.name(), { ...config, folderID: f.id })
        }

        this.folderID = f.id
    }
}

class BookmarkStorage implements IStorage {
    constructor(private folderID: string) {}

    async store(link: ILink): Promise<IError | void> {
        await browser.bookmarks.create({
            parentId: this.folderID,
            title: `${link.title}${link.selectionText ? ` - ${link.selectionText}` : ''}`,
            url: link.url,
        })
    }
}
