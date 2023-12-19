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

// todo refactor
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

export interface IError {
    message: string
}

export interface IStorage {
    store(link: ILink): Promise<IError | void>
}

export interface IProvider {
    boot(): Promise<IError | void>

    register(config: IProviderConfig): Promise<IError | void>

    provider(): IStorage
}

export interface IProviderConfig {
    name: string
    enable: boolean
    config: Record<string, any>
}
