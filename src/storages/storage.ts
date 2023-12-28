import type { IServiceProvider } from '../types'
import type { Application } from '../application'

export class StorageServiceProvider implements IServiceProvider {
    async boot(): Promise<void> {}

    async register(app: Application): Promise<void> {
    }
}
