import type { IConfig, IError, ILink, IServiceProvider } from '../types'
import type { Application } from '../application'
import { BearStorage } from './bear/BearProvider'

export class StorageServiceProvider implements IServiceProvider {
    /**
     * The enabled storages.
     *
     * @protected
     */
    protected storages: IStorage[] = [
        new BearStorage(),
    ]

    boot(): void {}

    /**
     * Register the storage service.
     *
     * @param app
     */
    register(app: Application): void {
        const manager = new StorageManager(new DefaultDispatcher(app))

        for (const storage of this.storages) {
            manager.register(storage)
        }

        app.storage = manager
    }
}

export interface IStorage {
    config(): Promise<IConfig>
    store(link: ILink, config: IConfig): Promise<IError | void>
}

export class StorageManager {
    /**
     * The enabled storages.
     *
     * @protected
     */
    protected storages: IStorage[] = []

    public constructor(protected dispatcher: StorageDispatcher) {}

    /**
     * Push a storage to the storages.
     *
     * @param storage
     */
    public register(storage: IStorage): void {
        this.storages.push(storage)
    }

    /**
     * Get registered storages.
     *
     * @returns {IStorage[]} The all registered storages.
     */
    public async getStorages(): Promise<IStorage[]> {
        return this.storages
    }

    /**
     * Get the enabled storages.
     *
     * @returns {IStorage[]} The enabled storages.
     */
    public async getEnabledStorages(): Promise<IStorage[]> {
        const storages: IStorage[] = []

        for (const storage of await this.getStorages()) {
            const config = await storage.config()
            if (config.enabled) {
                storages.push(storage)
            }
        }

        return storages
    }

    /**
     * Dispatch link to all enabled storages.
     *
     * @param link
     */
    public async dispatch(link: ILink): Promise<IError[]> {
        return await this.dispatcher.dispatch(link, await this.getEnabledStorages())
    }
}

interface StorageDispatcher {
    dispatch(link: ILink, storages: IStorage[]): Promise<IError[]>
}

class DefaultDispatcher implements StorageDispatcher {
    public constructor(protected app: Application) {}

    /**
     * Dispatch link to storages by default sort[a-z]
     *
     * @param link
     * @param storages
     */
    public async dispatch(link: ILink, storages: IStorage[]): Promise<IError[]> {
        if (!storages) {
            return []
        }

        const sortedStorages = this.sortStorages(storages.filter(s => s !== null))
        const errors: IError[] = []

        for (const storage of sortedStorages) {
            const config = await storage.config()
            const error = await storage.store(link, config)

            console.log('store link to storage', storage, error)

            if (error) {
                errors.push(error)
            }
        }

        return errors
    }

    /**
     * Sort storages by name.
     *
     * @param storages
     * @private
     */
    private sortStorages(storages: IStorage[]): IStorage[] {
        return storages.sort((a, b) => {
            return a.constructor.name.localeCompare(b.constructor.name)
        })
    }
}
