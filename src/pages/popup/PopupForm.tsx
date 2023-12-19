import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { PopupInput } from './PopupInput'
import { PopupTextarea } from './PopupTextarea'
import { PopupFooter } from './PopupFooter'

interface ReaderBoxFormProps {
    link: string
    title?: string
    selectionText?: string
}

const useStyles = createUseStyles({
    container: {
        padding: '5px 20px 0 20px',
    },
    links: {
        border: '1.2px solid #404040',
        borderRadius: '4px',
        marginTop: '12px',
        padding: '6px',
    },
})

export function PopupForm(props: ReaderBoxFormProps) {
    const [link, setLink] = useState(props.link)
    const [title, setTitle] = useState(props.title)
    const [selectionText, setSelectionText] = useState(props.selectionText)
    const styles = useStyles()

    const onSava = () => {
        console.log(link, title, selectionText)
    }

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <PopupInput
                    label="Your Link"
                    value={link}
                    placeholder="Enter anything if you want to change the default link"
                    onChange={v => setLink(v)}
                />
                <PopupInput
                    label="Web Title"
                    value={title}
                    placeholder="Enter anything if you want to change the default title"
                    onChange={v => setTitle(v)}
                />
            </div>
            <PopupTextarea value={selectionText} onChange={v => setSelectionText(v)}></PopupTextarea>
            <PopupFooter onSubmit={onSava}></PopupFooter>
        </div>
    )
}
