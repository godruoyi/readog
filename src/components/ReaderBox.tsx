import { createUseStyles } from 'react-jss'
import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'
import type { ILink } from '../types'
import { ReaderBoxHeader } from './ReaderBoxHeader'
import { ReaderBoxForm } from './ReaderBoxForm'

export interface IReaderBoxProps extends ILink {}

const useStyles = createUseStyles({
    container: {
        position: 'fixed',
        zIndex: 2147483647, // todo use constant
        minWidth: '460px',
        maxWidth: '460px',
        lineHeight: '1.6',
        minHeight: '400px',
        top: '10px',
        right: '10px',
        width: 'max-content',
        backgroundColor: '#262626',
        borderRadius: '4px',
        border: '1.2px solid #404040',
        transform: 'translateY(-150%)',
        transition: 'all ease-in-out 250ms',
    },
    open: {
        transform: 'translateY(0)',
    },
})

export function ReaderBox(props: IReaderBoxProps) {
    const styles = useStyles()
    const appTarget = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const keyPress = (e: any) => {
        if (e.keyCode == 27) {
            setIsOpen(false)
        }
    }

    const handleDocumentClick = (e: any) => {
        // @ts-expect-error
        if (appTarget?.current?.contains(e.target)) {
            return
        }

        setIsOpen(false)
    }

    useEffect(() => {
        setIsOpen(true)

        document.addEventListener('keyup', keyPress)
        // document.addEventListener('click', handleDocumentClick)

        return () => {
            // document.addEventListener('keyup', keyPress)
            // document.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    return (
        <div className={clsx(styles.container, { [styles.open]: isOpen })} ref={appTarget}>
            <ReaderBoxHeader />
            <ReaderBoxForm title={props.title} link={props.selectionUrl ?? props.url} selectionText={props.selectionText} />
        </div>
    )
}
