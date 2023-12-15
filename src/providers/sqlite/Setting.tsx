import { createUseStyles } from 'react-jss'
import { clsx } from 'clsx'
import { Button } from 'baseui/button'
import { SIZE } from 'baseui/input'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { Switch } from '../../components/Switch'
import { getSettings, syncSettings } from '../../supports/storage'

const useStyles = createUseStyles({
    container: {
        display: 'none',
    },
    t0: {
        marginTop: '0px',
    },
    t12: {
        marginTop: '12px',
    },
    open: {
        display: 'block',
    },
})

interface ContentGeneralProps {
    display: boolean
}

export function Setting(props: ContentGeneralProps) {
    const styles = useStyles()
    const [path, setPath] = useState('')
    const [enable, setEnable] = useState(false)

    useEffect(() => {
        ;(async () => {
            const settings = await getSettings()

            setPath(settings.sqlite.path)
            setEnable(settings.sqlite.enable)
        })()
    }, [])

    const buttonSave = async () => {
        await syncSettings({
            sqlite: {
                path,
                enable,
            },
        })
    }

    return (
        <div className={clsx(styles.container, { [styles.open]: props.display })}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
            >
                <h1 className={styles.t0}>SQLite</h1>
                <Switch checked={enable} onChange={setEnable}></Switch>
            </div>
            <div style={{
                marginTop: '18px',
            }}
            >
                <Input
                    label="DB Path"
                    caption="Good relationships don't just happen.They take time, patience and two people who truly want to be together."
                    placeholder="Would rather do the regret, also don't miss the regret"
                    type="input"
                    value={path}
                    onChange={setPath}
                />

                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
                >
                    <Button
                        size={SIZE.mini}
                        onClick={buttonSave}
                        overrides={{
                            BaseButton: {
                                style: {
                                    backgroundColor: '#0670EB',
                                    width: '100px',
                                },
                            },
                        }}
                    >
                        SAVE
                    </Button>
                </div>
            </div>
        </div>
    )
}
