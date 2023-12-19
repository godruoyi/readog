import type { IProviderConfig, ISettings } from '../types'
import { getBrowser } from './browser'

export async function syncSettings(settings: Partial<ISettings>) {
    console.log('sync settings', settings)
    const b = await getBrowser()

    await b.storage.sync.set(settings)
}

const settingKeys: Record<keyof ISettings, number> = {
    tg: 1,
    sqlite: 1,
    file: 1,
}

export async function getSettings(): Promise<ISettings> {
    const b = await getBrowser()
    const settings = await b.storage.sync.get(Object.keys(settingKeys))

    return settings as ISettings
}

export async function getEnabledProvidersConfig(): Promise<IProviderConfig[]> {
    const settings = await getSettings()
    const providers: IProviderConfig[] = []

    if (!settings) {
        return providers
    }

    // todo refactor
    if (settings.tg.enable) {
        providers.push({
            name: 'tg',
            enable: true,
            config: settings.tg,
        })
    }

    if (settings.sqlite.enable) {
        providers.push({
            name: 'sqlite',
            enable: true,
            config: settings.sqlite,
        })
    }

    if (settings.file.enable) {
        providers.push({
            name: 'file',
            enable: true,
            config: settings.file,
        })
    }

    return providers
}
