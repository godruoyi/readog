import * as twitterUtil from '../supports/tweet'

async function main() {
    for await (const tweet of twitterUtil.observeTweets()) {
        // some guys tweet cannot be shareable, find a better way to insert the READ LATER button
        const shareButton = await twitterUtil.findShareElementButton(tweet.element)

        shareButton?.addEventListener('click', () => {
            const readLater = twitterUtil.createReadLaterMenuItem()

            readLater.onclick = () => {
                // todo: show global read later modal
                console.log('Read later clickedss!', tweet)
            }

            twitterUtil.findShareMenuContainer().then(c => c?.appendChild(readLater))
        })
    }
}

main()
