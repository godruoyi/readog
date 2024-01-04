import { createUseStyles } from 'react-jss'
import { clsx } from 'clsx'
import { Button } from 'baseui/button'
import { SIZE } from 'baseui/input'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { getProviderSettings, syncProviderSettings } from '../../supports/storage'
import { Checkbox } from '../../components/Checkbox'

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
                <Checkbox checked={enable} onChange={setEnable} />
            </div>
            <div style={{
                marginTop: '18px',
            }}
            >
                <Input
                    label="Token"
                    caption="You can create a bot with @BotFather and get the token"
                    placeholder="Please enter your telegram bot token"
                    type="password"
                    value={token}
                    onChange={setToken}
                />

                <Input
                    label="Channel ID"
                    placeholder="Which channel do you want to send to?"
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

export function Logo() {
    return (
        <svg
            style={{
                color: '#FFD480',
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
            />
        </svg>
    )
}
