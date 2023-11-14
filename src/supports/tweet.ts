import { observeReadyElements } from 'element-ready'
import type { Tweet } from '../types'
import { TweetSelector, TweetUrlRegexp } from '../constants'

/**
 * Observes tweets and returns them as an async iterable. we will add a click listener to the share button of each tweet.
 *
 * @return {AsyncIterable<Tweet>} - An async iterable of tweets.
 */
export async function* observeTweets(): AsyncIterable<Tweet> {
    for await (const element of observeReadyElements(TweetSelector, { waitForChildren: true })) {
        const tweet = parseTweetElement(element)

        if (tweet) {
            // wait for the tweet to be fully rendered
            await new Promise(resolve => setTimeout(resolve, 100))

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
 * Finds the share button element in a given tweet element.
 *
 * @param {HTMLElement} tweetElement - The tweet element to search in(div[data-testid="cellInnerDiv"]).
 * @return {HTMLElement | null} - The share button element if found, otherwise null.
 */
export function findShareButtonElement(tweetElement: HTMLElement): HTMLElement | null {
    // todo: find a better way to find the share button element
    const selector: string = 'div>div>article>div>div:last-child>div:last-child>div:last-child>div:last-child>div>div>div:nth-of-type(6)'

    return tweetElement.querySelector(selector)
}
