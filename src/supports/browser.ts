import type Browser from 'webextension-polyfill'
import browser from 'webextension-polyfill'
import type { ILink } from '../types'

export function isSystemLink(link: string) {
    return (
        link.startsWith('chrome://') || link.startsWith('chrome-extension://') || link.startsWith('chrome-search://')
    )
}

export function isSystemPage(tab: Browser.Tabs.Tab) {
    return tab.active && isSystemLink(tab.url as string)
}

export async function createOrUpdateBookmarkFolder(name: string, folderID?: string): Promise<Browser.Bookmarks.BookmarkTreeNode> {
    if (folderID) {
        try {
            const b = await browser.bookmarks.get(folderID)
            console.log('find bookmark folder', b)

            if (b.length > 0) {
                return await updateBookmarkFolder(name, folderID)
            }
        }
        catch (_) {}
    }

    return await createBookmarkFolder(name)
}

export async function updateBookmarkFolder(name: string, folderID: string): Promise<Browser.Bookmarks.BookmarkTreeNode> {
    return await browser.bookmarks.update(folderID, {
        title: name,
    })
}

export async function createBookmarkFolder(name: string): Promise<Browser.Bookmarks.BookmarkTreeNode> {
    return await browser.bookmarks.create({
        title: name,
        parentId: '1', // top level
    })
}

export function transformBrowserTabToLink(
    tab: Browser.Tabs.Tab,
    menuData?: Browser.Menus.OnClickData,
): ILink {
    return {
        url: tab.url || '',
        title: tab.title,
        selectionText: menuData?.selectionText,
        selectionUrl: menuData?.linkUrl,
    }
}
