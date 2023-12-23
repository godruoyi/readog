import elementReady, { observeReadyElements } from 'element-ready'
import type { Tweet } from '../types'
import { TweetMainCss, TweetSelector, TweetUrlRegexp } from '../constants'
import { sleep } from './time'

/**
 * Observes tweets and returns them as an async iterable, yielding with each new tweet.
 *
 * todo: should be also work fine in single tweet page
 *
 * @return {AsyncIterable<Tweet>} - An async iterable of tweets.
 */
export async function* observeTweets(): AsyncIterable<Tweet> {
    for await (const element of observeReadyElements(TweetSelector, { waitForChildren: true })) {
        const tweet = parseTweetElement(element)

        if (tweet) {
            yield tweet
        }
    }
}

/**
 * Parses the tweet URL from the given element.
 *
 * @param {HTMLElement} element - The HTML element to search within.
 *
 * @returns {string | undefined} - The tweet URL if found, else undefined.
 */
export function parseTweetUrlFromElement(element: HTMLElement): string | undefined {
    return Array.from(element.querySelectorAll('a'))
        .find(a => a && a.href && TweetUrlRegexp.test(a.href))?.href
}

/**
 * Parses a tweet element and extracts the tweet URL and element.
 *
 * @param {HTMLElement} element - The HTML element containing the tweet.
 * @return {Tweet | null} - The parsed tweet object, or null if the URL cannot be extracted.
 */
export function parseTweetElement(element: HTMLElement): Tweet | null {
    const url = parseTweetUrlFromElement(element)

    if (url == null) {
        return null
    }

    return { url, element }
}

/**
 * Finds the share element button within a tweet element.
 *
 * @param {HTMLElement} tweetElement - The tweet element to search within.
 * @returns {Promise<Element | null>} - A promise that resolves with the share element button or null if not found.
 */
export async function findShareElementButton(tweetElement: HTMLElement): Promise<Element | null> {
    // wait for the share button to be rendered, may we can use MutationObserver to detect the menu is rendered
    // so that we don't need to wait for some time since we actually don't know how long it will take to render the menu
    // move to backlogs and fix it later
    await sleep(250)

    const selector: string = 'div>div>article>div>div:last-child>div:last-child>div:last-child>div:last-child>div>div>div:nth-of-type(6)'

    return Promise.resolve(tweetElement.querySelector(selector))
}

/**
 * Waits for the Share Menu container to be rendered and returns it.
 * @returns {Promise<HTMLDivElement|undefined>} A promise that resolves to the Share Menu container as an HTMLDivElement,
 *  or undefined if it is not found.
 */
export async function findShareMenuContainer(): Promise<HTMLDivElement | undefined> {
    // same as findShareElementButton
    // this is waiting for the menu modal to be rendered
    await sleep(250)

    return elementReady(`div.${TweetMainCss}[data-testid="Dropdown"]`, {
        waitForChildren: true,
        stopOnDomReady: true,
    })
}

/**
 * Creates a menu item for "Read Later".
 *
 * @return {HTMLElement} The created menu item element.
 */
export function createReadLaterMenuItem(): HTMLElement {
    const menu = document.createElement('div')
    menu.setAttribute('role', 'menuitem')
    menu.setAttribute('tabindex', '0')
    menu.classList.add(TweetMainCss, 'r-1loqt21', 'r-18u37iz', 'r-ymttw5', 'r-1f1sjgu', 'r-13qz1uu', 'r-o7ynqc', 'r-6416eg', 'r-1ny4l3l')

    menu.innerHTML = `
<div class="${TweetMainCss} r-1777fci r-j2kj52">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-1q142lx">
        <g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g>
    </svg>
</div>
<div class="css-175oi2r r-16y2uox r-1wbh5a2">
    <div dir="ltr" class="" style="color: rgb(231, 233, 234); text-overflow: unset;">
        <span class="css-1qaijid r-bcqeeo r-qvutc0 r-poiln3" style="text-overflow: unset;">Save to Readog</span>
    </div>
</div>
`

    return menu
}
