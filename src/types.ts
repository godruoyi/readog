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

export interface IConfig extends Record<string, any> {
}

export interface ISettings {
    // other general settings

    providers: Record<string, IConfig>
}

export interface IError {
    message: string
}

export interface IStorage {
    store(link: ILink): Promise<IError | void>
}

export interface IProvider {
    boot(): Promise<void>

    register(config: IConfig): Promise<void>

    provider(): IStorage
}
