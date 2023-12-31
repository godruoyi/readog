import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { app } from '../../application'
import type { IEvent } from '../../events/event'
import { EVENT_SAVE_READOG, EVENT_SAVE_STATUS } from '../../events/event'
import { sleep } from '../../supports/time'
import type { IError } from '../../types'
import { PopupInput } from './PopupInput'
import { PopupTextarea } from './PopupTextarea'
import { PopupFooter } from './PopupFooter'

interface ReaderBoxFormProps {
    link: string
    title?: string
    selectionText?: string
    onSubmitted?: () => void
}

const useStyles = createUseStyles({
    container: {
        padding: '5px 20px 0 20px',
        height: '100%',
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
    const [saveFinished, setSaveFinished] = useState(false)
    const [errors, setErrors] = useState<IError[]>([])
    const styles = useStyles()

    const onSava = async () => {
        setLoading(true)
        await app.event?.sendEventToBackground(EVENT_SAVE_READOG, {
            url: link,
            title,
            selectionText: remark,
        })
    }

    const saved = (event: IEvent) => {
        sleep(1000).then(() => {
            const errors = event?.payload?.errors?.map((e: any) => {
                return { message: e?.message ?? '' } as IError
            }).filter((e: IError) => e && e.message) ?? []
            setErrors(errors)
            setLoading(false)
            setSaveFinished(true)
            props.onSubmitted?.()
        })
    }

    useEffect(() => {
        const clean = app.event?.listen(saved, EVENT_SAVE_STATUS)
        return () => {
            clean?.()
        }
    }, [])

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
            <PopupFooter onSubmit={onSava} loading={loading} errors={errors} finished={saveFinished}></PopupFooter>
        </div>
    )
}
