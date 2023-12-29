import type { IStorage } from '../storage'
import type { IConfig, IError, ILink } from '../../types'
import { getProviderSettings } from '../../supports/storage'

export class TelegramStorage implements IStorage {
    async config(): Promise<IConfig> {
        return getProviderSettings('tg')
    }

    async store(link: ILink, config: IConfig): Promise<IError | void> {
        if (config.channelID === undefined
            || config.token === undefined
            || config.channelID === ''
            || config.token === '') {
            return { message: 'invalid telegram channel id or token' } as IError
        }

        const tg = new Telegram(config.channelID, config.token)
        const response = await tg.sendMessage(this.convertLinkToMessage(link))

        const data = await response.json()
        if (!data.ok) {
            return { message: data.description } as IError
        }
    }

    private convertLinkToMessage(link: ILink): string {
        // todo better message formatting and full link info
        return `${link.title}\n\n${link.selectionText}\n\n${link.url}`
    }
}

class Telegram {
    private readonly token: string
    private readonly chatID: string

    constructor(chatID: string, token: string) {
        this.chatID = chatID
        this.token = token
    }

    public async sendMessage(message: string): Promise<Response> {
        return fetch(`https://api.telegram.org/bot${this.token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: this.chatID,
                text: message,
            }),
        })
    }
}
