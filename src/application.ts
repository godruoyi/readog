import type { IServiceProvider, ISettings } from './types'
import { getSettings } from './supports/storage'
import type { EventManager } from './events/event'
import { EventServiceProvider } from './events/event'

class Application {
    /**
     * The application settings.
     *
     * @private
     */
    public settings: ISettings | null = null

    /**
     * Event manager instance, it will be initialized after application booted.
     *
     * @public
     */
    public event: EventManager | null = null

    /**
     * Storage manager instance, it will be initialized after application booted.
     *
     * @public
     */
    public storage: StorageManager | null = null

    /**
     * Indicates if the application has been bootstrapped.
     *
     * @private
     */
    private static booted: boolean = false

    /**
     * The application singleton instance.
     *
     * @private
     */
    private static instance: Application | null = null

    /**
     * The bootstrap providers for the application.
     *
     * @private
     */
    private providers: IServiceProvider[] = [
        new EventServiceProvider(),
        // new StorageServiceProvider(),
    ]

    /**
     * Private constructor to enforce singleton.
     *
     * @private
     * @throws {IError} if the application has already been booted
     * @throws {IError} registering the providers failed
     */
    private constructor() {}

    /**
     * Determine if the application has been booted.
     *
     * @returns {boolean} true if the application has been booted, false otherwise
     */
    public static isBooted(): boolean {
        return this.booted
    }

    /**
     * Get the application singleton instance.
     *
     * @returns {Application} application instance
     * @throws {IError} if the application has already been booted
     * @throws {IError} registering the providers failed
     * @throws {IError} booting the providers failed
     * @throws {IError} get config from storage failed
     */
    public static async getInstance(): Promise<Application> {
        if (Application.instance) {
            return Application.instance
        }

        return await (new Application()).launch()
    }

    /**
     * Launch the application.
     *
     * @private
     */
    private async launch(): Promise<Application> {
        console.log('launch application...')

        await this.registerSettingService()
        await this.registerServiceProviders()

        await this.bootstrap()

        return this
    }

    /**
     * Bootstrap the application.
     *
     * @private
     * @throws {IError} bootstrapping the providers failed
     */
    private async bootstrap(): Promise<void> {
        this.boot()

        await this.bootServiceProviders()
    }

    /**
     * Boot the application, the application will be booted only once.
     *
     * @private
     */
    private boot(): void {
        if (Application.booted) {
            throw new Error('Application has already been booted.')
        }

        Application.booted = true
        Application.instance = this
    }

    /**
     * Load all config from storage
     *
     * @private
     */
    private async registerSettingService() {
        this.settings = await getSettings()
    }

    /**
     * Register the service providers.
     *
     * @private
     * @throws {IError} registering the providers failed
     */
    private async registerServiceProviders() {
        for (const provider of this.providers) {
            await provider.register(this)
        }
    }

    /**
     * Boot the service providers.
     *
     * @throws {IError} booting the providers failed
     * @private
     */
    private async bootServiceProviders() {
        for (const provider of this.providers) {
            await provider.boot()
        }
    }
}

export { Application }
