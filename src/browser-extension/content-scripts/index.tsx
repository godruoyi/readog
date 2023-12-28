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
import { Application } from '../../application'
import { EVENT_OPEN_POPUP } from '../../events/event'
import type { ILink } from '../../types'

let root: Root | null = null
const generateId = createGenerateId()

export async function showPopup(link: ILink) {
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
                            <Popup {...link} />
                        </BaseProvider>
                    </StyletronProvider>
                </JSS>
            </GlobalSuspense>
        </React.StrictMode>,
    )
}

async function main() {
    const app = await Application.getInstance()

    app.event?.contentScript.listen(EVENT_OPEN_POPUP, (e) => {
        const link = e.link as ILink
        showPopup(link)
    })
}

main()
