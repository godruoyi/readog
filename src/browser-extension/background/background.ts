import browser from 'webextension-polyfill'
import { transformBrowserTabToLink } from '../../supports/browser'
import type { ILink } from '../../types'

browser.contextMenus.create(
    {
        id: 'read-hub',
        type: 'normal',
        title: 'ReadHub',
        contexts: ['page', 'selection', 'link', 'image', 'video', 'audio', 'editable'],
    },
)

browser.action.onClicked.addListener(async (tab, info) => {
    if (tab.id === undefined) {
        console.warn('tab is undefined when toolbar button clicked', tab, info)

        return
    }

    browser.tabs.sendMessage(tab.id, transformBrowserTabToLink(tab, undefined))
})

browser.contextMenus?.onClicked.addListener(async (info, tab) => {
    if (tab === undefined || tab.id === undefined) {
        console.warn('tab is undefined when context menu(right menu) clicked', info, tab)

        return
    }

    browser.tabs.sendMessage(tab.id, transformBrowserTabToLink(tab, info))
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('background receive message', request, sender, sendResponse)

    if (request?.type == 'create-bookmark') {
        findOrCreateBookmark(request.payload as ILink, request.payload.folderID).then((b) => {
            sendResponse({
                bookmark: b,
            })
        })
    }
})

async function findOrCreateBookmark(link: ILink, folderID: string) {
    // todo skip if already exists

    return await browser.bookmarks.create({
        title: link.title,
        url: link.url,
        parentId: folderID,
    })
}
