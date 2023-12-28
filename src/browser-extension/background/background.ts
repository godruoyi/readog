import browser from 'webextension-polyfill'
import { isSystemPage, transformBrowserTabToLink } from '../../supports/browser'
import { EVENT_OPEN_POPUP, event } from '../../event'

browser.contextMenus.create(
    {
        id: 'readog',
        type: 'normal',
        title: 'Save via Readog',
        contexts: ['page', 'selection', 'link', 'image', 'video', 'audio', 'editable'],
    },
)

browser.action.onClicked.addListener(async (tab, info) => {
    if (isSystemPage(tab)) {
        browser.runtime.openOptionsPage()

        return
    }

    event.fireToContentScript({ type: EVENT_OPEN_POPUP, payload: transformBrowserTabToLink(tab) }, tab.id as number)
})

browser.contextMenus?.onClicked.addListener(async (info, tab) => {
    console.log('context menu clicked', info, tab)

    // todo
})

browser.runtime.onMessage.addListener((request, sender) => {
    const { tab } = sender

    event.runBackgroundListener(request, tab?.id as number)
    // event.runBackgroundListener(request, sender, sendResponse)
    // event.background.listen()
//     console.log('background receive message', request, sender, sendResponse)
//
//     // todo refactor to use EventDispatcher or something, perhaps we can get more best practice from Laravel
//     if (request?.type === 'create-bookmark') {
//         findOrCreateBookmark(request.payload as ILink, request.payload.folderID).then((b) => {
//             console.log('create bookmark', b)
//             // sendResponse(b)
//         })
//     }
//
//     if (request?.type === 'open_options_page') {
//         browser.runtime.openOptionsPage()
//     }
})

// async function findOrCreateBookmark(link: ILink, folderID: string) {
//     // todo skip if already exists
//
//     return await browser.bookmarks.create({
//         title: `${link.title}${link.selectionText ? ` - ${link.selectionText}` : ''}`,
//         url: link.url,
//         parentId: folderID,
//     })
// }
