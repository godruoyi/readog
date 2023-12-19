import type { ILink, IProvider } from './types'

export async function Dispatch(link: ILink) {
    // todo
    await new RandomDispatcher().dispatch(link)
}

interface Dispatcher {
    dispatch(link: ILink): Promise<void>
}

class RandomDispatcher implements Dispatcher {
    providers: IProvider[] = []

    constructor() {
        this.providers = []
    }

    dispatch(_link: ILink): Promise<void> {
        return Promise.resolve(undefined)
    }
}
