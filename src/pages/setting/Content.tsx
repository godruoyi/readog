import { createUseStyles } from 'react-jss'
import { useState } from 'react'
import { MenuItem } from '../../components/MenuItem'
import { Logo as TgLogo } from '../../providers/tg/Logo'
import { Logo as FileLogo } from '../../providers/file/Logo'
import { Logo as SQLiteLogo } from '../../providers/sqlite/Logo'
import { Setting as FileProviderSetting } from '../../providers/file/Setting'
import { Setting as SQLiteProviderSetting } from '../../providers/sqlite/Setting'
import { Setting as TgProviderSetting } from '../../providers/tg/Setting'
import { ContentGeneral } from './ContentGeneral'

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
    const [selectedID, setSelectedID] = useState('general')

    return (
        <div className={styles.container}>

            <div className={styles.menu}>
                <MenuItem title="General" id="general" selected={selectedID === 'general'} onClick={setSelectedID}></MenuItem>
                <MenuItem title="Telegram" id="tg" logo={TgLogo()} selected={selectedID === 'tg'} onClick={setSelectedID}></MenuItem>
                <MenuItem title="File" id="file" logo={FileLogo()} selected={selectedID === 'file'} onClick={setSelectedID}></MenuItem>
                <MenuItem title="SQLite" id="sqlite" logo={SQLiteLogo()} selected={selectedID === 'sqlite'} onClick={setSelectedID}></MenuItem>
            </div>
            <div className={styles.content}>
                <ContentGeneral display={selectedID === 'general'}></ContentGeneral>
                <TgProviderSetting display={selectedID === 'tg'}></TgProviderSetting>
                <FileProviderSetting display={selectedID === 'file'}></FileProviderSetting>
                <SQLiteProviderSetting display={selectedID === 'sqlite'}></SQLiteProviderSetting>
            </div>
        </div>
    )
}
