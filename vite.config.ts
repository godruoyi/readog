import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webExtension from '@samrum/vite-plugin-web-extension'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getManifest } from './src/manifest'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
        webExtension({
            manifest: getManifest(),
        }),
    ],
    build: {
        minify: !isDev,
        sourcemap: isDev,
        target: 'chrome105',
    },
})
