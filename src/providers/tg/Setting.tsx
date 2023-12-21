import { createUseStyles } from 'react-jss'
import { clsx } from 'clsx'
import { Button } from 'baseui/button'
import { SIZE } from 'baseui/input'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { Switch } from '../../components/Switch'
import { getProviderSettings, syncProviderSettings } from '../../supports/storage'

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
    const [enable, setEnable] = useState(false)
    const [channelID, setChannelID] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        ;(async () => {
            const settings = await getProviderSettings('tg')

            console.log('get settings', settings)

            setEnable(settings.enable ?? false)
            setChannelID(settings.channelID ?? '')
            setToken(settings.token ?? '')
        })()
    }, [])

    const buttonSave = async () => {
        await syncProviderSettings('tg', {
            channelID,
            token,
            enable,
        })
    }

    return (
        <div className={clsx(styles.container, { [styles.open]: props.display })}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
            >
                <h1 className={styles.t0}>Telegram</h1>
                <Switch checked={enable} onChange={setEnable}></Switch>
            </div>
            <div style={{
                marginTop: '18px',
            }}
            >
                <Input
                    label="Token"
                    caption="Good relationships don't just happen.They take time, patience and two people who truly want to be together."
                    placeholder="Would rather do the regret, also don't miss the regret"
                    type="password"
                    value={token}
                    onChange={setToken}
                />

                <Input
                    label="Channel ID"
                    placeholder="Would rather do the regret, also don't miss the regret"
                    value={channelID}
                    onChange={setChannelID}
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
