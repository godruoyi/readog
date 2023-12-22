import * as twitterUtil from '../../supports/tweet'
import { showPopup } from './index'

async function main() {
    console.log('Twitter content script loaded')

    for await (const tweet of twitterUtil.observeTweets()) {
        console.log('Tweet found!', tweet)
        // some guys tweet cannot be shareable, find a better way to insert the READ LATER button
        const shareButton = await twitterUtil.findShareElementButton(tweet.element)

        shareButton?.addEventListener('click', () => {
            const readLater = twitterUtil.createReadLaterMenuItem()

            readLater.onclick = () => {
                showPopup({
                    url: tweet.url,
                    title: 'Twitter',
                })

                twitterUtil.findShareMenuContainer().then((c) => {
                    // hide the menu after user click the READ LATER button
                    c?.style.setProperty('display', 'none')
                })
            }

            twitterUtil.findShareMenuContainer().then(c => c?.appendChild(readLater))
        })
    }
}

main()
