import browser from 'webextension-polyfill'
import type { IStorage } from '../storage'
import type { IConfig, IError, ILink } from '../../types'
import { getProviderSettings, syncProviderSettings } from '../../supports/storage'
import { createOrUpdateBookmarkFolder } from '../../supports/browser'

export class BookmarkStorage implements IStorage {
    protected name: string = 'bookmark'

    async config(): Promise<IConfig> {
        return getProviderSettings(this.name)
    }

    async store(link: ILink, config: IConfig): Promise<IError | void> {
        const folderID = await this.prepareFolderIsNotExists(config)

        return await this.createBookmark(link, folderID)
    }

    async createBookmark(link: ILink, folderID: string): Promise<IError | void> {
        await browser.bookmarks.create({
            parentId: folderID,
            title: `${link.title}${link.selectionText ? ` - ${link.selectionText}` : ''}`,
            url: link.url,
        })
    }

    async prepareFolderIsNotExists(config: IConfig) {
        const folder = config?.folder ?? 'Readog'
        const folderID = config?.folderID

        const f = await createOrUpdateBookmarkFolder(folder, folderID)
        if (folderID && folderID !== f.id) {
            await syncProviderSettings(this.name, { ...config, folderID: f.id })
        }

        return f.id as string
    }
}
