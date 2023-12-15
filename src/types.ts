export interface Tweet {
    id?: string
    author?: string

    url: string
    element: HTMLElement
}

export interface ILink {
    url: string
    title?: string

    // will be set when user use context menu to select text or link
    selectionText?: string
    selectionUrl?: string
}

export interface ISettings {
    provider: {
        tg: {
            token: string
            channelID: string
            enable: boolean
        }
    }
}
