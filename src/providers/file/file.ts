import type { IConfig, ILink, IProvider, IStorage } from '../../types'

// todo cannot dynamic read/write local file in web extension
// find a way to do this
export class FileProvider implements IProvider {
    private path: string = ''

    name(): string { return 'file' }

    boot(): Promise<void> {
        return Promise.resolve(undefined)
    }

    provider(): IStorage {
        return new FileStorage(this.path)
    }

    register(config: IConfig): Promise<void> {
        this.path = config.path as string

        return Promise.resolve(undefined)
    }
}

export class FileStorage implements IStorage {
    constructor(_path: string) {}

    store(_link: ILink): Promise<void> {
        console.log('store link to file success', _link)

        return Promise.resolve(undefined)
    }
}
