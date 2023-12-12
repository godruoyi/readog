import { FormControl } from 'baseui/form-control'
import { Textarea } from 'baseui/textarea'
import React, { useState } from 'react'
import { Button } from 'baseui/button'
import { Input, SIZE } from 'baseui/input'
import { createUseStyles } from 'react-jss'

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
    mt10: {
        marginTop: '10px',
    },
})

export function ReaderBoxForm(props: ReaderBoxFormProps) {
    const [link, setLink] = useState(props.link)
    const [title, setTitle] = useState(props.title)
    const [selectionText, setSelectionText] = useState(props.selectionText)
    const styles = useStyles()

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <FormControl
                    label="Your Link"
                    overrides={{
                        ControlContainer: {
                            style: ({ _$theme }) => ({
                                margin: '0',
                            }),
                        },
                        Label: {
                            style: ({ _$theme }) => ({
                                margin: '0 0 0 6px',
                                color: '#B9ABFD',
                            }),
                        },
                    }}
                >
                    <Input
                        placeholder="Your Link"
                        id="input-id2"
                        value={link}
                        size={SIZE.compact}
                        onChange={e => setLink(e.target.value)}
                        overrides={{
                            Root: {
                                style: ({ _$theme }) => ({
                                    borderColor: '#262626',
                                    margin: '0',
                                    padding: '0',
                                    outline: '0 !important',
                                }),
                            },
                            Input: {
                                style: ({ _$theme }) => ({
                                    'backgroundColor': '#262626',
                                    'margin': '0',
                                    'padding': '6px',
                                    'color': '#FFFFFF',
                                    ':hover': {
                                        cursor: 'text',
                                        backgroundColor: '#233A5A',
                                        color: '#FDFDFD',
                                    },
                                }),
                            },
                        }}
                    />
                </FormControl>

                <FormControl
                    label="Web Title"
                    overrides={{
                        ControlContainer: {
                            style: ({ _$theme }) => ({
                                margin: '0',
                            }),
                        },
                        Label: {
                            style: ({ _$theme }) => ({
                                margin: '0 0 0 6px',
                                color: '#B9ABFD',
                            }),
                        },
                    }}
                >
                    <Input
                        placeholder="Your Link"
                        id="input-3"
                        value={title}
                        size={SIZE.compact}
                        onChange={e => setTitle(e.target.value)}
                        overrides={{
                            Root: {
                                style: ({ _$theme }) => ({
                                    borderColor: '#262626',
                                    margin: '0',
                                    padding: '0',
                                    outline: '0 !important',
                                }),
                            },
                            Input: {
                                style: ({ _$theme }) => ({
                                    'backgroundColor': '#262626',
                                    'margin': '0',
                                    'padding': '6px',
                                    'color': '#FFFFFF',
                                    ':hover': {
                                        cursor: 'text',
                                        backgroundColor: '#233A5A',
                                        color: '#FDFDFD',
                                    },
                                }),
                            },
                        }}
                    />

                </FormControl>
            </div>

            <div className={styles.mt10}>
                <FormControl caption="We recommend you record your think on this monent">
                    <Textarea
                        value={selectionText}
                        onChange={e => setSelectionText(e.target.value)}
                        placeholder="Please input your some thing and what do you do."
                        clearOnEscape
                        overrides={{
                            Input: {
                                style: ({ _$theme }) => ({
                                    backgroundColor: '#404040',
                                    color: '#FFFFFF',
                                    fontSize: '14px',
                                }),
                            },
                            Root: {
                                style: ({ _$theme }) => ({
                                    borderColor: '#404040',
                                }),
                            },
                        }}
                    />
                </FormControl>
            </div>
            <div style={{
                justifyContent: 'space-between',
                display: 'flex',
            }}
            >
                <div></div>
                <Button
                    onClick={() => { console.log(link) }}
                    overrides={{
                        BaseButton: {
                            style: ({ _$theme }) => ({
                                backgroundColor: '#0670EB',
                                color: '#FFFFFF',
                                fontSize: '18px',
                                width: '108px',
                                height: '33px',
                                borderRadius: '4px',
                            }),
                        },
                    }}
                >
                    + Save
                </Button>
            </div>
        </div>
    )
}
