import type { IServiceProvider } from './types'
import { EventServiceProvider } from './events/event'
import type { StorageManager } from './storages/storage'
import { StorageServiceProvider } from './storages/storage'
import type { EventDispatcher } from './events/event'

class Application {
    /**
     * Event manager instance, it will be initialized after application booted.
     *
     * @public
     */
    public event: EventDispatcher | null = null

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
        new StorageServiceProvider(),
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
    public static getInstance(): Application {
        if (Application.instance) {
            return Application.instance
        }

        return (new Application()).launch()
    }

    /**
     * Launch the application.
     *
     * @private
     */
    private launch(): Application {
        console.log('launch application...')

        this.registerServiceProviders()

        this.bootstrap()

        return this
    }

    /**
     * Bootstrap the application.
     *
     * @private
     * @throws {IError} bootstrapping the providers failed
     */
    private bootstrap(): void {
        this.boot()

        this.bootServiceProviders()
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
     * Register the service providers.
     *
     * @private
     * @throws {IError} registering the providers failed
     */
    private registerServiceProviders() {
        for (const provider of this.providers) {
            provider.register(this)
        }
    }

    /**
     * Boot the service providers.
     *
     * @throws {IError} booting the providers failed
     * @private
     */
    private bootServiceProviders() {
        for (const provider of this.providers) {
            provider.boot()
        }
    }
}

const app = Application.getInstance()

export { Application, app }
