import '../../supports/enableDevHMR'
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { JssProvider, createGenerateId } from 'react-jss'
import { create } from 'jss'
import preset from 'jss-preset-default'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider, LightTheme } from 'baseui'
import { createPopupCardElement, queryPopupCardElement } from '../../supports/popup'
import { GlobalSuspense } from '../../components/GlobalSuspense'
import { Popup } from '../../pages/popup/Popup'
import type { IEvent } from '../../event'
import { EVENT_OPEN_POPUP, event } from '../../event'

let root: Root | null = null
const generateId = createGenerateId()

export async function showPopup(event: IEvent) {
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

    if (root) {
        root.unmount()
    }

    root = createRoot(popup)
    root.render(
        <React.StrictMode>
            <GlobalSuspense>
                <JSS jss={jss} generateId={generateId} classNamePrefix="__godruoyi-readhub-extension">
                    <StyletronProvider value={engine}>
                        <BaseProvider theme={LightTheme}>
                            <Popup {...event.payload} />
                        </BaseProvider>
                    </StyletronProvider>
                </JSS>
            </GlobalSuspense>
        </React.StrictMode>,
    )
}

async function main() {
    event.listen(EVENT_OPEN_POPUP, showPopup)
}

main()
