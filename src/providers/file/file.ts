import type { ILink, IProvider, IProviderConfig, IStorage } from '../../types'

export class FileProvider implements IProvider {
    private path: string = ''

    boot(): Promise<void> {
        return Promise.resolve(undefined)
    }

    provider(): IStorage {
        return new FileStorage(this.path)
    }

    register(config: IProviderConfig): Promise<void> {
        this.path = config.name

        return Promise.resolve(undefined)
    }
}

export class FileStorage implements IStorage {
    constructor(_path: string) {}

    store(_link: ILink): Promise<void> {
        return Promise.resolve(undefined)
    }
}
