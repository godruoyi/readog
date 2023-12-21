import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import type { ILink } from '../../types'
import { fireLinkToDispatcher } from '../../dispatch'
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
    const [remark, setRemark] = useState(props.selectionText)
    const [loading, setLoading] = useState(false)
    const styles = useStyles()

    const onSava = async () => {
        // todo validate form
        setLoading(true)
        const errors = await fireLinkToDispatcher({
            url: link,
            title,
            selectionText: remark,
        } as ILink)

        // alert errors
        console.log(errors)
        setLoading(false)
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
            <PopupTextarea value={remark} onChange={v => setRemark(v)}></PopupTextarea>
            <PopupFooter onSubmit={onSava} loading={loading}></PopupFooter>
        </div>
    )
}
