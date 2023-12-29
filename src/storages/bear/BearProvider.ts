import type { IStorage } from '../storage'
import type { IConfig, IError, ILink } from '../../types'
import { getProviderSettings } from '../../supports/storage'

// import type { IConfig, ILink, IProvider, IStorage } from '../../types'
//
// export class BearProvider implements IProvider {
//     private folder: string = ''
//     async boot(): Promise<void> {}
//
//     name(): string { return 'bear' }
//
//     provider(): IStorage {
//         return new Bear(this.folder as string)
//     }
//
//     async register(config: IConfig): Promise<void> {
//         this.folder = config.folder ?? '#Readog Next'
//     }
// }
//
// class Bear implements IStorage {
//     constructor(private folder: string) {}
//
//     async store(link: ILink): Promise<void> {
//         return await this.storeViaXCallbackUrl(link)
//     }
//
//     private async storeViaXCallbackUrl(link: ILink): Promise<void> {
//         const url = this.prepareCreateXCallbackUrl(link)
//
//         await browser.tabs.update({
//             url,
//         })
//     }
//
//     private prepareCreateXCallbackUrl(link: ILink): string {
//         const title = encodeURIComponent(link.title ?? link.selectionText ?? link.url)
//         const text = encodeURIComponent(`${link.selectionText}\n${link.url}`)
//         const tags = this.parseTagsFromFolder(this.folder).join(',')
//
//         return `bear://x-callback-url/create?title=${title}&text=${text}&tags=${tags}`
//     }
//
//     private parseTagsFromFolder(folder: string): string[] {
//         // @todo support multiple tags
//         return [encodeURIComponent(folder)]
//     }
// }

export class BearStorage implements IStorage {
    async config(): Promise<IConfig> {
        return await getProviderSettings('bear')
    }

    async store(link: ILink, config: IConfig): Promise<IError | void> {
        console.log('save bear', link, config)
    }
}
