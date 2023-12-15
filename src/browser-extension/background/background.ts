import browser from 'webextension-polyfill'
import { transformBrowserTabToLink } from '../../supports/browser'

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
