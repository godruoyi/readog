import browser from 'webextension-polyfill'
import type { IConfig, ISettings } from '../types'

export async function syncSettings(settings: Partial<ISettings>) {
    console.log('sync settings', settings)
    await browser.storage.sync.set(settings)
}

export async function syncProviderSettings(name: string, config: Partial<IConfig>) {
    const original = await getSettings()
    original.providers[name] = config

    await syncSettings(original)
}

const settingKeys: Record<keyof ISettings, number> = {
    providers: 1,
}

export async function getSettings(): Promise<ISettings> {
    let settings = await browser.storage.sync.get(Object.keys(settingKeys))

    if (!settings) {
        settings = {}
    }

    if (!settings.providers) {
        settings.providers = {}
    }

    return settings as ISettings
}

export async function getProviderSettings(name: string): Promise<IConfig> {
    const settings = await getSettings()
    const config = settings.providers[name]

    return config || {} as IConfig
}
