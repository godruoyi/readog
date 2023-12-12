import '../supports/enableDevHMR'
import browser from 'webextension-polyfill'
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { JssProvider, createGenerateId } from 'react-jss'
import { create } from 'jss'
import preset from 'jss-preset-default'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { BaseProvider, LightTheme } from 'baseui'
import { createPopupCardElement, queryPopupCardElement } from '../supports/popup'
import { GlobalSuspense } from '../components/GlobalSuspense'
import { ReaderBox } from '../components/ReaderBox'
import type { ILink } from '../types'

let root: Root | null = null
const generateId = createGenerateId()

async function showPopup(link: ILink) {
    let popup = await queryPopupCardElement()
    if (!popup) {
        popup = await createPopupCardElement()
    }

    const jss = create().setup({
        ...preset(),
        insertionPoint: popup.parentElement ?? undefined,
    })
    const JSS = JssProvider
    const engine = new Styletron({
        container: popup.parentElement ?? undefined,
        prefix: `x-styletron-`,
    })

    root = createRoot(popup)
    root.render(
        <React.StrictMode>
            <GlobalSuspense>
                <JSS jss={jss} generateId={generateId} classNamePrefix="__godruoyi-readhub-extension">
                    <StyletronProvider value={engine}>
                        <BaseProvider theme={LightTheme}>
                            <ReaderBox {...link} />
                        </BaseProvider>
                    </StyletronProvider>
                </JSS>
            </GlobalSuspense>
        </React.StrictMode>,
    )
}

async function main() {
    if (window.top !== window) {
        console.debug('not top window')

        return
    }

    browser.runtime.onMessage.addListener((link) => {
        console.info('receive link', link)
        showPopup(link)
    })
}

main()
