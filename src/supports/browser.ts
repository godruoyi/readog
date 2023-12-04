import type Browser from 'webextension-polyfill'
import type { ILink } from '../types'

export function isSystemLink(link: string) {
    return (
        link.startsWith('chrome://') || link.startsWith('chrome-extension://') || link.startsWith('chrome-search://')
    )
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
