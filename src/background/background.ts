import browser from 'webextension-polyfill'

browser.contextMenus?.create(
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

    // @todo go to settings page if url not set

    browser.tabs.sendMessage(tab.id, { title: 'hello action', url: 'hello', select_text: 'none' }).then()
})

browser.contextMenus?.onClicked.addListener(async (info, tab) => {
    if (tab === undefined || tab.id === undefined) {
        console.warn('tab is undefined when context menu(right menu) clicked', info, tab)

        return
    }

    // @todo go to settings page if url not set

    browser.tabs.sendMessage(tab.id, { title: 'hello context', url: 'hello', select_text: 'select text' }).then()
})
