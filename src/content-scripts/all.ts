import { getBrowser } from '../supports/browser'

async function main() {
    const browser = await getBrowser()

    browser.runtime.onMessage.addListener((message) => {
        console.log('receive message', message)
        if (window !== window.top) {

        }
    })
}

main().then()
