import browser from 'webextension-polyfill'
import { ExtensionContainerId, PopupCardId } from '../constants'

export async function queryPopupCardElement(): Promise<HTMLDivElement | null> {
    const container = await findPopupContainer()

    return container.shadowRoot?.querySelector(`#${PopupCardId}`) as HTMLDivElement | null
}

export async function createPopupCardElement(): Promise<HTMLDivElement> {
    const $popupCard = document.createElement('div')
    $popupCard.id = PopupCardId
    const $container = await findPopupContainer()
    $container.shadowRoot?.querySelector('div')?.appendChild($popupCard)

    if ($container.shadowRoot) {
        const shadowRoot = $container.shadowRoot
        if (import.meta.hot) {
            const { addViteStyleTarget } = await import('@samrum/vite-plugin-web-extension/client')
            await addViteStyleTarget(shadowRoot)
        }
        else {
            import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS?.forEach((cssPath) => {
                const styleEl = document.createElement('link')
                styleEl.setAttribute('rel', 'stylesheet')
                styleEl.setAttribute('href', browser.runtime.getURL(cssPath))
                shadowRoot.appendChild(styleEl)
            })
        }
    }
    return $popupCard
}

export async function findPopupContainer(): Promise<HTMLElement> {
    const container = document.getElementById(ExtensionContainerId)
    if (container) {
        return new Promise(resolve => resolve(container as HTMLElement))
    }

    const newContainer = document.createElement('div')
    newContainer.id = ExtensionContainerId
    newContainer.style.zIndex = '99999' // @todo move to constants

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // I don't know why
            const findContainer: HTMLElement | null = document.getElementById(ExtensionContainerId)
            if (findContainer) {
                resolve(findContainer)
                return
            }

            // I don't know why
            if (!newContainer) {
                reject(new Error('failed to create container'))
            }

            const shadowRoot = newContainer.attachShadow({ mode: 'open' })
            const inner = document.createElement('div')
            shadowRoot.appendChild(inner)

            const html = document.body.parentElement
            if (html) {
                html.appendChild(newContainer as HTMLElement)
            }
            else {
                document.appendChild(newContainer as HTMLElement)
            }

            resolve(newContainer)
        }, 100)
    })
}
