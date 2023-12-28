import type { IError, ILink, IStorage } from './types'
import { Application } from './application'

export async function fireLinkToDispatcher(link: ILink): Promise<IError[]> {
    try {
        // feature: dispatch link to storages that configured in Settings via workflow, it should be also support
        // multiple process and async process, hope someone can help me to implement this feature.
        return await new DefaultDispatcher().dispatch(link)
    }
    catch (error) {
        // generate error like provider init failed or boot failed
        // todo: I dont know how to process this error now, so just return it
        console.error(error)
        return [{ message: error } as IError]
    }
}

interface Dispatcher {
    dispatch(link: ILink): Promise<IError[]>
}

/**
 * Dispatch link to storages by default sort[a-z]
 */
class DefaultDispatcher implements Dispatcher {
    application: Application | null = null

    constructor() {
        this.application = new Application()
    }

    public async dispatch(link: ILink): Promise<IError[]> {
        const storages = await this.application?.getStorages()

        if (!storages) {
            return []
        }

        const sortedStorages = this.sortStorages(storages.filter(s => s !== null))
        const errors: IError[] = []
        for (const storage of sortedStorages) {
            const error = await storage.store(link)

            console.log('store link to storage', storage, error)

            if (error) {
                errors.push(error)
            }
        }

        return errors
    }

    private sortStorages(storages: IStorage[]): IStorage[] {
        return storages.sort((a, b) => {
            return a.constructor.name.localeCompare(b.constructor.name)
        })
    }
}
