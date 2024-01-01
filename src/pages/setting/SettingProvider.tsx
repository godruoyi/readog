import { createUseStyles } from 'react-jss'
import { useEffect, useState } from 'react'
import { MenuItem } from '../../components/MenuItem'
import { Logo as TgLogo, Setting as TgProviderSetting } from '../../storages/tg/Setting'
import { Logo as BearLogo, Setting as BearProviderSetting } from '../../storages/bear/Setting'
import { Logo as BookmarkLogo, Setting as BookmarkProviderSetting } from '../../storages/bookmark/Setting'
import { Logo as ObsidianLogo, Setting as ObsidianProviderSetting } from '../../storages/obsidian/Setting'
import { getSettings, syncSettings } from '../../supports/storage'
import { GeneralConfig } from './GeneralConfig'

const useStyles = createUseStyles({
    container: {
        marginTop: '40px',
        display: 'flex',
    },
    menu: {
        textAlign: 'left',
    },
    content: {
        width: '100%',
        marginRight: '120px',
        marginLeft: '60px',
    },
})

export function SettingProvider() {
    const styles = useStyles()
    const [selectedID, setSelectedID] = useState('tg')

    useEffect(() => {
        ;(async () => {
            const settings = await getSettings()
            setSelectedID(settings.selectedMenu ?? 'general')
        })()
    }, [])

    const saveSelectedID = async (id: string) => {
        const s = await getSettings()
        s.selectedMenu = id
        await syncSettings(s)
        setSelectedID(id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <MenuItem title="General" id="general" selected={selectedID === 'general'} onClick={saveSelectedID}></MenuItem>
                <MenuItem title="Telegram" id="tg" logo={TgLogo()} selected={selectedID === 'tg'} onClick={saveSelectedID}></MenuItem>
                <MenuItem title="Bookmark" id="bookmark" logo={BookmarkLogo()} selected={selectedID === 'bookmark'} onClick={saveSelectedID}></MenuItem>
                <MenuItem title="Bear" id="bear" logo={BearLogo()} selected={selectedID === 'bear'} onClick={saveSelectedID}></MenuItem>
                <MenuItem title="Obsidian" id="obsidian" logo={ObsidianLogo()} selected={selectedID === 'obsidian'} onClick={saveSelectedID}></MenuItem>
            </div>
            <div className={styles.content}>
                <GeneralConfig display={selectedID === 'general'}></GeneralConfig>
                <TgProviderSetting display={selectedID === 'tg'}></TgProviderSetting>
                <BookmarkProviderSetting display={selectedID === 'bookmark'}></BookmarkProviderSetting>
                <BearProviderSetting display={selectedID === 'bear'}></BearProviderSetting>
                <ObsidianProviderSetting display={selectedID === 'obsidian'}></ObsidianProviderSetting>
            </div>
        </div>
    )
}
