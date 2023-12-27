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

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('background receive message', request, sender, sendResponse)

    // todo refactor to use EventDispatcher or something, perhaps we can get more best practice from Laravel
    if (request?.type === 'create-bookmark') {
        findOrCreateBookmark(request.payload as ILink, request.payload.folderID).then((b) => {
            console.log('create bookmark', b)
            // sendResponse(b)
        })
    }

    if (request?.type === 'open_options_page') {
        browser.runtime.openOptionsPage()
    }
})

async function findOrCreateBookmark(link: ILink, folderID: string) {
    // todo skip if already exists

    return await browser.bookmarks.create({
        title: `${link.title}${link.selectionText ? ` - ${link.selectionText}` : ''}`,
        url: link.url,
        parentId: folderID,
    })
}
