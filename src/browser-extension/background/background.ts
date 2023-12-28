import browser from 'webextension-polyfill'
import { isSystemPage, transformBrowserTabToLink } from '../../supports/browser'
import { EVENT_OPEN_POPUP } from '../../events/event'
import { Application } from '../../application'

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
        browser.runtime.openOptionsPage().then(() => {})

        return
    }

    Application.getInstance().then((app) => {
        app.event?.background.sendEventToContentScript(tab.id as number, {
            type: EVENT_OPEN_POPUP,
            link: transformBrowserTabToLink(tab),
        }).then(() => {})
    })
})

browser.contextMenus?.onClicked.addListener(async (info, tab) => {
    console.log('context menu clicked', info, tab)
    // todo
})

browser.runtime.onMessage.addListener((request, sender) => {
    const { tab } = sender
    const { type } = request

    Application.getInstance().then((app) => {
        const event = {
            tabID: tab?.id as number,
            type,
            ...request,
        }

        app.event?.background.fire(type, event)
    })
})
