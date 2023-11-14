import { findShareButtonElement, observeTweets } from '../supports/tweet'

async function main() {
    for await (const tweet of observeTweets()) {
        findShareButtonElement(tweet.element)?.addEventListener('click', () => {
            alert(tweet.url)
        })
    }
}

main()
