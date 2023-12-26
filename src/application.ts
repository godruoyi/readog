import type { IConfig, IProvider, IStorage } from './types'
import { getSettings } from './supports/storage'
import { TgProvider } from './providers/tg/TgProvider'
import { BookmarkProvider } from './providers/bookmark/BookmarkProvider'
import { BearProvider } from './providers/bear/BearProvider'

class Application {
    /**
     * Indicates if the application has been bootstrapped.
     *
     * @private
     */
    private booted: boolean = false

    /**
     * The bootstrap providers for the application.
     *
     * @private
     */
    private providers: IProvider[] = [
        new TgProvider(),
        new BookmarkProvider(),
        new BearProvider(),
    ]

    /**
     * The storage instances for the application.
     *
     * @private
     */
    private storages: IStorage[] = []

    /**
     * Private constructor to enforce singleton.
     *
     * @private
     * @throws {IError} if the application has already been booted
     * @throws {IError} bootstrapping the providers failed
     * @throws {IError} registering the providers failed
     */
    public constructor() {
        this.boot()
    }

    /**
     * Determine if the application has been booted.
     *
     * @returns {boolean} true if the application has been booted, false otherwise
     */
    public isBooted(): boolean {
        return this.booted
    }

    /**
     * Get the storage instances for the application.
     *
     * @returns {IStorage[]} the storage instances
     */
    public async getStorages(): Promise<IStorage[]> {
        await this.bootstrap()

        return this.storages || []
    }

    /**
     * Boot the application, the application will be booted only once.
     *
     * @private
     */
    private boot(): void {
        if (this.booted) {
            throw new Error('Application has already been booted.')
        }

        this.booted = true
    }

    /**
     * Bootstrap the application.
     *
     * @private
     * @throws {IError} bootstrapping the providers failed
     * @throws {IError} registering the providers failed
     */
    private async bootstrap(): Promise<void> {
        const configs = await this.loadEnabledProvidersSettings()

        if (configs === undefined) {
            return
        }

        for (const provider of this.providers) {
            const name = this.normalizeProviderName(provider)

            if (!name || !configs[name]) {
                continue
            }

            // todo register provider failed should not effect other providers
            await this.registerProvider(provider, configs[name])

            // same as above
            await provider.boot()

            this.storages.push(provider.provider())
        }
    }

    /**
     * Register the given provider.
     *
     * @param provider
     * @param config
     * @private
     * @throws {IError} if the provider registration failed
     */
    private async registerProvider(provider: IProvider, config: IConfig): Promise<void> {
        await provider.register(config)
    }

    /**
     * Normalize the given provider name, we will use this name to get the provider config
     * that from the browser storage.
     *
     * @param provider
     * @private
     */
    private normalizeProviderName(provider: IProvider): string {
        const name = provider.name()

        return name.toLowerCase().trim()
    }

    /**
     * Load the providers settings from the browser storage.
     *
     * @private
     */
    private async loadEnabledProvidersSettings(): Promise<Record<string, IConfig>> {
        const p = (await getSettings()).providers

        return Object.keys(p)
            .filter(name => p[name].enable ?? false)
            .reduce((obj, name) => {
                return { ...obj, [name]: p[name] }
            }, {} as Record<string, IConfig>)
    }
}

export { Application }
