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
    tg: {
        token: string
        channelID: string
        enable: boolean
    }
    sqlite: {
        enable: boolean
        path: string
    }
    file: {
        enable: boolean
        path: string
    }
}
