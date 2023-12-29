import type { Application } from './application'

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

export interface IServiceProvider {
    /**
     * Boot the provider when all providers are registered.
     *
     * @throws Error boot error, such as cannot connect to service, etc.
     */
    boot(): void

    /**
     * Register a service provider.
     *
     * @param app
     * @throws Error registration service provider error, such as invalid config, cannot connect to service, etc.
     */
    register(app: Application): void
}

export interface IConfig extends Record<string, any> {
    enabled: boolean
}

export interface ISettings {
    // other general settings
    selectedMenu?: string

    providers: Record<string, IConfig>
}

export interface IError {
    message: string
}

export interface IStorage {
    store(link: ILink): Promise<IError | void>
}

export interface IProvider {
    /**
     * Boot the provider when all providers are registered.
     *
     * @throws Error boot error, such as cannot connect to service, etc.
     */
    boot(): Promise<void>

    /**
     * Get the provider name.
     *
     * We will use this name to get the provider config that from the browser storage.
     */
    name(): string

    /**
     * Register a service provider.
     *
     * @param config provider config
     * @throws Error registration service provider error, such as invalid config, cannot connect to service, etc.
     */
    register(config: IConfig): Promise<void>

    /**
     * Provider a storage service.
     *
     * Should always return a valid storage service and never throw an error.
     */
    provider(): IStorage
}
