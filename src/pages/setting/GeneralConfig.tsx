import { createUseStyles } from 'react-jss'
import { useEffect } from 'react'
import { clsx } from 'clsx'
import { FormSwitch } from '../../components/FormSwitch'

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
                <FormSwitch
                    autosave="closeWhenSaved"
                    label="Close Window When Saved"
                    caption="Enable this will close Readog when save all links successfully after 2 seconds"
                />
            </div>
        </div>
    )
}
