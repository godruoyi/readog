import type { IConfig, IError, ILink, IProvider, IStorage } from '../../types'

export class TgProvider implements IProvider {
    protected tg: Telegram | null = null

    async boot(): Promise<void> {}

    provider(): IStorage {
        return new TgStorage(<Telegram> this.tg)
    }

    async register(config: IConfig): Promise<void> {
        if (config.channelID === undefined
            || config.token === undefined
            || config.channelID === ''
            || config.token === '') {
            throw new Error('invalid telegram channel id or token')
        }

        this.tg = new Telegram(config.channelID, config.token)
    }
}

class TgStorage implements IStorage {
    private readonly tg: Telegram

    constructor(tg: Telegram) {
        this.tg = tg
    }

    public async store(link: ILink): Promise<IError | void> {
        const response = await this.tg.sendMessage(this.convertLinkToMessage(link))
        const data = await response.json()

        if (!data.ok) {
            return { message: data.description } as IError
        }
    }

    private convertLinkToMessage(link: ILink): string {
        // todo better message formatting and full link info
        return `${link.title} - ${link.url}`
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
