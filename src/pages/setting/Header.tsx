import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    title: {
        marginTop: '0',
        color: '#E7E7E7',
    },
    description: {
        color: '#E7E7E7',
        fontSize: '14px',
    },
    header: {
        padding: '0 10px',
    },
})

export function Header() {
    const styles = useStyles()
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Readog Options Settings</h1>
            <span className={styles.description}>Welcome to Readog Options Settings, you can configure the settings here.</span>
        </div>
    )
}
