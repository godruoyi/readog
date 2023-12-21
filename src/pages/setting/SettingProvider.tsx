import { createUseStyles } from 'react-jss'
import { MenuItem } from '../../components/MenuItem'
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

export function SettingProvider() {
    const styles = useStyles()

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <MenuItem title="General" id="general" selected={false}></MenuItem>
            </div>
            <div className={styles.content}>
                <ContentGeneral display={false}></ContentGeneral>
            </div>
        </div>
    )
}
