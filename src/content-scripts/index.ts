import { findShareButtonElement, observeTweets } from '../supports/tweet'

async function main() {
    for await (const tweet of observeTweets()) {
        // find the tweet's share button and add a click listener
        findShareButtonElement(tweet.element)?.addEventListener('click', () => {
            console.log('tweet share button clicked')
        })

        console.log(tweet)
    }
}

main()
