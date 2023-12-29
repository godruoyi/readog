import { createUseStyles } from 'react-jss'
import { useEffect } from 'react'
import { clsx } from 'clsx'
import { Switch } from '../../components/Switch'

const useStyles = createUseStyles({
    container: {
        display: 'none',
    },
    t0: {
        marginTop: '0px',
    },
    open: {
        display: 'block',
    },
})

interface ContentGeneralProps {
    display: boolean
}

export function GeneralConfig(props: ContentGeneralProps) {
    useEffect(() => {
        console.log('ContentGeneralProps', props.display)
    })

    const styles = useStyles()
    return (
        <div className={clsx(styles.container, { [styles.open]: props.display })}>
            <h1 className={styles.t0}>General</h1>
            <div>
                {/* todo more general options can be configured here, for now it's just a placeholder */}
                <Switch
                    name="Close Readog when save all links successfully"
                    description="Enable this woll close Readog when save all links successfully after 2 seconds"
                    autosave={true}
                    saveKey="closeWhenSaved"
                />
                {/* <Switch name="Provide filling in and saving passwords"></Switch> */}
                {/* <Switch name="And saving passwords" description="Improve the autofill experience with smarter recommendations while protecting your private key data."></Switch> */}
                {/* <Switch name="W" description="Improve the autofill experience with smarter recommendations while protecting your private key data."></Switch> */}
            </div>
        </div>
    )
}
