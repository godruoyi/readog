import type { Browser } from 'webextension-polyfill'

export function isSystemLink(link: string) {
    return (
        link.startsWith('chrome://') || link.startsWith('chrome-extension://') || link.startsWith('chrome-search://')
    )
}

export async function getBrowser(): Promise<Browser> {
    return (await import('webextension-polyfill')).default
}
