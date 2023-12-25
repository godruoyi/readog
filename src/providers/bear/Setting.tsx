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
    const [folder, setFolder] = useState('#Readog')
    const [enable, setEnable] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            const settings = await getProviderSettings('bear')

            setFolder(settings.folder ?? '')
            setEnable(settings.enable ?? false)
        })()
    }, [])

    const buttonSave = async () => {
        setLoading(true)

        await syncProviderSettings('bear', {
            folder,
            enable,
        })
        setLoading(false)
    }

    return (
        <div className={clsx(styles.container, { [styles.open]: props.display })}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
            >
                <h1 className={styles.t0}>Bear APP</h1>
                <Switch checked={enable} onChange={setEnable}></Switch>
            </div>
            <div style={{
                marginTop: '18px',
            }}
            >
                <Input
                    label="Bear Folder"
                    caption="The folder name will be created in Bear app automatically, each link will be single note in this folder."
                    placeholder="Which folder do you want to save, default is #Readog Next"
                    type="input"
                    value={folder}
                    onChange={setFolder}
                />

                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
                >
                    <Button
                        size={SIZE.mini}
                        onClick={buttonSave}
                        isLoading={loading}
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
