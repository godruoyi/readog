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
    enable: boolean
}

export interface ISettings {
    selectedMenu?: string
    closeWhenSaved?: boolean

    providers: Record<string, IConfig>
}

export interface IError {
    message: string
}
