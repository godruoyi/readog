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
            default_popup: 'src/popup/popup.html',
        },

        background: {
            service_worker: 'src/background/background.ts',
        },

        content_scripts: [
            {
                matches: ['twitter.com/*'],
                all_frames: true,
                js: ['src/content-scripts/index.ts'],
            },
        ],
    }

    return manifest
}
