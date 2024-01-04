import { createUseStyles } from 'react-jss'
import { clsx } from 'clsx'
import { Button } from 'baseui/button'
import { SIZE } from 'baseui/input'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { getProviderSettings, syncProviderSettings } from '../../supports/storage'
import { createOrUpdateBookmarkFolder } from '../../supports/browser'
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
                <Checkbox checked={enable} onChange={setEnable} />
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

export function Logo() {
    return (
        <svg
            style={{
                color: '#ABFCCB',
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path
                fillRule="evenodd"
                d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8"
            />
            <path
                d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"
            />
            <path
                d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"
            />
        </svg>
    )
}
