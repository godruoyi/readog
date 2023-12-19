import type { IProvider, IProviderConfig } from '../types'
import { getEnabledProvidersConfig } from '../supports/storage'

export async function Providers(): Promise<IProvider[]> {
    const configs = await getEnabledProvidersConfig()

    if (configs.length === 0) {
        return []
    }

    const promises = configs.map(config => makeProvider(config))

    return await Promise.all(promises)
}

export async function makeProvider(config: IProviderConfig): Promise<IProvider> {
    const name = config.name

    return new (await import(`../providers/${name}/${name}`))[name]() as IProvider
}
