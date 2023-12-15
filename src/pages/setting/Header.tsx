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
            <h1 className={styles.title}>Reader Options Settings</h1>
            <span className={styles.description}>Have the courage to follow your heart and intuition. They somehow already know what you truly want to become</span>
        </div>
    )
}
