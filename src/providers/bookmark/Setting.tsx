import { createUseStyles } from 'react-jss'
import { clsx } from 'clsx'
import { Button } from 'baseui/button'
import { SIZE } from 'baseui/input'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { Switch } from '../../components/Switch'
import { getProviderSettings, syncProviderSettings } from '../../supports/storage'
import { createOrUpdateBookmarkFolder } from '../../supports/browser'

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
    const [folder, setFolder] = useState('Readog')
    const [folderID, setFolderID] = useState('')
    const [enable, setEnable] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            const settings = await getProviderSettings('bookmark')

            setFolder(settings.folder ?? '')
            setFolderID(settings.folderID ?? '')
            setEnable(settings.enable ?? false)
        })()
    }, [])

    const buttonSave = async () => {
        setLoading(true)

        const b = await createOrUpdateBookmarkFolder(folder, folderID)
        await syncProviderSettings('bookmark', {
            folder,
            enable,
            folderID: b.id,
        })
        setFolderID(b.id)
        setLoading(false)
    }

    return (
        <div className={clsx(styles.container, { [styles.open]: props.display })}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
            >
                <h1 className={styles.t0}>Bookmark</h1>
                <Switch checked={enable} onChange={setEnable}></Switch>
            </div>
            <div style={{
                marginTop: '18px',
            }}
            >
                <Input
                    label="Folder Name"
                    caption="The folder name will be created in the root directory of the bookmark bar and will be used to save the link."
                    placeholder="Which folder do you want to save?"
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
