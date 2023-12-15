import browser from 'webextension-polyfill'
import type { ISettings } from '../types'

export async function syncSettings(settings: Partial<ISettings>) {
    console.log('sync settings', settings)
    await browser.storage.sync.set(settings)
}

const settingKeys: Record<keyof ISettings, number> = {
    provider: 1,
}

export async function getSettings(): Promise<ISettings> {
    const settings = await browser.storage.sync.get(Object.keys(settingKeys))

    return settings as ISettings
}
