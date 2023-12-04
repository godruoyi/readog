import { version } from '../package.json'

export function getManifest() {
    const manifest: chrome.runtime.Manifest = {
        manifest_version: 3,

        name: 'AnyLater',
        description: 'AnyLater is a browser extension that allows you save any page to anywhere.',
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
            default_title: 'Save to ReadHub',
        },

        options_ui: {
            page: 'src/options/index.html',
            open_in_tab: true,
        },

        background: {
            service_worker: 'src/background/background.ts',
        },

        content_scripts: [
            // {
            //     matches: ['https://twitter.com/*'],
            //     all_frames: true,
            //     js: ['src/content-scripts/twitter.ts'],
            // },
            {
                matches: ['<all_urls>'],
                all_frames: true,
                js: ['src/content-scripts/index.tsx'],
            },
        ],

        permissions: [
            'tabs',
            'contextMenus',
            'storage',
        ],
    }

    return manifest
}
