import { observeReadyElements } from 'element-ready'
import type { Tweet } from '../types'
import { TweetSelector, TweetUrlRegexp } from '../constants'

export async function* observeTweets(): AsyncIterable<Tweet> {
    for await (const element of observeReadyElements(TweetSelector)) {
        const tweet = parseTweetElement(element)

        if (tweet) {
            yield tweet
        }
    }
}

export function parseTweetUrlFromElement(element: HTMLElement): string | undefined {
    return Array.from(element.querySelectorAll('a'))
        .find(a => a && a.href && TweetUrlRegexp.test(a.href))?.href
}

export function parseTweetElement(element: HTMLElement): Tweet | null {
    const url = parseTweetUrlFromElement(element)

    if (url == null) {
        return null
    }

    return { url, element }
}

/**
 * Finds the share button element in a given tweet element.
 *
 * @param {HTMLElement} tweetElement - The tweet element to search in(div[data-testid="cellInnerDiv"]).
 * @return {HTMLElement | null} - The share button element if found, otherwise null.
 */
export function findShareButtonElement(tweetElement: HTMLElement): HTMLElement | null {
    const shareDiv = tweetElement.querySelector('div>div>article>div>div:last-child>div:last-child>div:last-child>div:last-child>div>div')
    if (!shareDiv) {
        return null
    }

    const x = shareDiv.querySelector('div,css-1dbjc4n,r-xoduu5')
    console.log(shareDiv)
    console.log(x)

    return null
}
