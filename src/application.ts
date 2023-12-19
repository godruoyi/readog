import type { IProvider, ISettings } from './types'

class Application {
    /**
     * Indicates if the application has been bootstrapped.
     *
     * @private
     */
    private static booted: boolean = false

    /**
     * The application instance.
     *
     * @private
     */
    private static instance: Application

    /**
     * All browser settings.
     *
     * @private
     */
    private settings: ISettings | null = null

    /**
     * All registered providers.
     *
     * @private
     */
    private providers: IProvider[] | [] = []

    /**
     * Private constructor to enforce singleton.
     *
     * @private
     */
    private constructor() {}

    /**
     * Get the application instance or create a new one.
     *
     * @returns {Application} the application instance
     */
    public static async getInstance(): Promise<Application> {
        if (!Application.instance) {
            const app = new Application()

            await app.register()
            await app.boot()
        }

        return Application.instance
    }

    /**
     * Determine if the application has been booted.
     *
     * @returns {boolean} true if the application has been booted, false otherwise
     */
    public isBooted(): boolean {
        return Application.booted
    }

    /**
     * Boot the application, the application will be booted only once.
     *
     * @private
     */
    private async boot(): Promise<void> {
        if (Application.booted) {
            throw new Error('Application has already been booted.')
        }

        Application.booted = true
        Application.instance = this
    }

    /**
     * Register all providers and load settings from storage.
     *
     * @private
     */
    private async register(): Promise<void> {
        await this.loadSettingsFromStorage()
        await this.registerProviders()
    }

    /**
     * Load settings from storage.
     *
     * @private
     */
    private async loadSettingsFromStorage() {
        // this.settings = await getSettings()
    }

    /**
     * Register each provider and store them in the providers array.
     *
     * @private
     */
    private async registerProviders(): Promise<void> {
        // this.providers = await Providers()

        // this.providers.map(provider => provider.register(this.extractProviderConfig(provider.name)))
    }
}

const app = await Application.getInstance()

export { app }
