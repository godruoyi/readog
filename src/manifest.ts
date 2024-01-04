import { version } from '../package.json'

export function getManifest() {
    const manifest: chrome.runtime.Manifest = {
        manifest_version: 3,

        name: 'Readog',
        description: 'Readog is a browser extension that can save your links to any platform.',
        version,

        icons: {
            16: 'icon/16.png',
            32: 'icon/32.png',
            48: 'icon/48.png',
            96: 'icon/96.png',
            128: 'icon/128.png',
        },

        action: {
            default_icon: 'icon/32.png',
            default_title: 'Save via Readog',
        },

        options_ui: {
            page: 'src/browser-extension/options/index.html',
            open_in_tab: true,
        },

        background: {
            service_worker: 'src/browser-extension/background/background.ts',
        },

        content_scripts: [
            {
                matches: ['https://twitter.com/*'],
                all_frames: true,
                js: ['src/browser-extension/content-scripts/twitter.ts'],
            },
            {
                matches: ['<all_urls>'],
                all_frames: true,
                js: ['src/browser-extension/content-scripts/index.tsx'],
            },
        ],

        permissions: [
            'tabs',
            'bookmarks',
            'contextMenus',
            'storage',
            'nativeMessaging',
        ],
    }

    return manifest
}
