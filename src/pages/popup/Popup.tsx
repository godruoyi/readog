import { createUseStyles } from 'react-jss'
import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'
import type { ILink } from '../../types'
import { ExtensionContainerId } from '../../constants'
import { sleep } from '../../supports/time'
import { PopupHeader } from './PopupHeader'
import { PopupForm } from './PopupForm'

export interface IReaderBoxProps extends ILink {
}

const useStyles = createUseStyles({
    container: {
        position: 'fixed',
        zIndex: 2147483647, // todo use constant
        minWidth: '460px',
        maxWidth: '460px',
        lineHeight: '1.6',
        top: '10px',
        right: '10px',
        width: 'max-content',
        backgroundColor: '#262626',
        borderRadius: '4px',
        border: '1.2px solid #404040',
        transform: 'translateY(-150%)',
        transition: 'all ease-in-out 100ms',
    },
    open: {
        transform: 'translateY(0)',
    },
})

export function Popup(props: IReaderBoxProps) {
    const styles = useStyles()
    const appTarget = useRef(null)
    const [isOpen, setIsOpen] = useState(true)

    const keyPress = (e: any) => {
        if (e.keyCode === 27) {
            setIsOpen(false)
        }
    }

    const handleDocumentClick = (e: any) => {
        if (e.target?.id === ExtensionContainerId) {
            return
        }
        setIsOpen(false)
    }

    useEffect(() => {
        setIsOpen(true)

        document.addEventListener('keyup', keyPress)
        document.addEventListener('click', handleDocumentClick)

        return () => {
            document.removeEventListener('keyup', keyPress)
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    return (
        <div className={clsx(styles.container, { [styles.open]: isOpen })} ref={appTarget}>
            <PopupHeader />
            <PopupForm
                title={props.selectionText ?? props.title}
                link={props.selectionUrl ?? props.url}
                selectionText=""
                onSubmitted={() => {
                    sleep(2000).then(() => {
                        setIsOpen(false)
                    })
                }}
            />
        </div>
    )
}
