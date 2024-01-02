import browser from 'webextension-polyfill'
import { isSystemPage, transformBrowserTabToLink } from '../../supports/browser'
import {
    EVENT_OPEN_OPTION,
    EVENT_OPEN_POPUP,
    EVENT_SAVED_READOG,
    EVENT_SAVE_READOG,
    EVENT_SAVING_READOG,
} from '../../events/event'
import { app } from '../../application'
import { OpenOptionEventListener } from '../../events/open_popup_event'
import { SaveReadogEvent, SavedEvent, SavingEvent } from '../../events/readong_event'

app.event?.registerAll({
    [EVENT_OPEN_OPTION]: [
        new OpenOptionEventListener(),
    ],
    [EVENT_SAVING_READOG]: [
        new SavingEvent(),
    ],
    [EVENT_SAVED_READOG]: [
        new SavedEvent(),
    ],
    [EVENT_SAVE_READOG]: [
        new SaveReadogEvent(),
    ],
})

browser.contextMenus.create(
    {
        id: 'readog',
        type: 'normal',
        title: 'Save via Readog',
        contexts: ['page', 'selection', 'link', 'image', 'video', 'audio', 'editable'],
    },
)

browser.action.onClicked.addListener(async (tab, _info) => {
    if (isSystemPage(tab)) {
        browser.runtime.openOptionsPage().then(() => {})

        return
    }

    app.event?.sendEventToContentScript(tab.id as number, EVENT_OPEN_POPUP, transformBrowserTabToLink(tab)).then(() => {})
})

browser.contextMenus?.onClicked.addListener(async (info, tab) => {
    if (!tab) {
        return
    }

    if (isSystemPage(tab)) {
        browser.runtime.openOptionsPage().then(() => {})
        return
    }

    app.event?.sendEventToContentScript(tab.id as number, EVENT_OPEN_POPUP, transformBrowserTabToLink(tab, info)).then(() => {})
})

browser.runtime.onMessage.addListener((request, sender) => {
    const { tab } = sender
    const { type, payload } = request

    const event = {
        tabID: tab?.id as number,
        type,
        payload,
    }

    app.event?.fire(event)
})
