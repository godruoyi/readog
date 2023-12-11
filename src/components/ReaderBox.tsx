import { createUseStyles } from 'react-jss'
import type { ILink } from '../types'
import { ReaderBoxHeader } from './ReaderBoxHeader'
import { ReaderBoxForm } from './ReaderBoxForm'

export interface IReaderBoxProps extends ILink {}

const useStyles = createUseStyles({
    container: {
        position: 'fixed',
        zIndex: 2147483647, // todo use constant
        // borderRadius: '4px',
        // boxShadow: '0 0 10px rgba(0,0,0,.3)',
        minWidth: '460px',
        maxWidth: '460px',
        lineHeight: '1.6',
        minHeight: '420px',
        // fontSize: '12px',
        // font: '14px/1.6 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        top: '10px',
        right: '10px',
        width: 'max-content',
        backgroundColor: '#262626',
        borderRadius: '4px',
        border: '1.2px solid #404040',
    },
})

export function ReaderBox(props: IReaderBoxProps) {
    const styles = useStyles()

    return (
        <div className={styles.container}>
            <ReaderBoxHeader />
            <ReaderBoxForm title={props.title} link={props.selectionUrl ?? props.url} selectionText={props.selectionText} />
        </div>
    )
}
