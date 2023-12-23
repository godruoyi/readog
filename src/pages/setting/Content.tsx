import { createUseStyles } from 'react-jss'
import { useState } from 'react'
import { MenuItem } from '../../components/MenuItem'
import { Logo as TgLogo } from '../../providers/tg/Logo'
import { Logo as BookmarkLogo } from '../../providers/bookmark/Logo'
import { Setting as TgProviderSetting } from '../../providers/tg/Setting'
import { Setting as BookmarkProviderSetting } from '../../providers/bookmark/Setting'

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

export function Content() {
    const styles = useStyles()
    const [selectedID, setSelectedID] = useState('tg')

    return (
        <div className={styles.container}>
            {/* todo refactor to component */}
            <div className={styles.menu}>
                {/* <MenuItem title="General" id="general" selected={selectedID === 'general'} onClick={setSelectedID}></MenuItem> */}
                <MenuItem title="Telegram" id="tg" logo={TgLogo()} selected={selectedID === 'tg'} onClick={setSelectedID}></MenuItem>
                <MenuItem title="Bookmark" id="bookmark" logo={BookmarkLogo()} selected={selectedID === 'bookmark'} onClick={setSelectedID}></MenuItem>

                {/* cannot use local file and local sqlite in chrome extension */}
                {/* <MenuItem title="File" id="file" logo={FileLogo()} selected={selectedID === 'file'} onClick={setSelectedID}></MenuItem> */}
                {/* <MenuItem title="SQLite" id="sqlite" logo={SQLiteLogo()} selected={selectedID === 'sqlite'} onClick={setSelectedID}></MenuItem> */}
            </div>
            <div className={styles.content}>
                {/* <ContentGeneral display={selectedID === 'general'}></ContentGeneral> */}
                <TgProviderSetting display={selectedID === 'tg'}></TgProviderSetting>
                <BookmarkProviderSetting display={selectedID === 'bookmark'}></BookmarkProviderSetting>
                {/* <FileProviderSetting display={selectedID === 'file'}></FileProviderSetting> */}
                {/* <SQLiteProviderSetting display={selectedID === 'sqlite'}></SQLiteProviderSetting> */}
            </div>
        </div>
    )
}
