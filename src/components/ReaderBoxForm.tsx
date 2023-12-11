import { FormControl } from 'baseui/form-control'
import { Textarea } from 'baseui/textarea'
import React, { useState } from 'react'
import { Button } from 'baseui/button'
import { Input, SIZE } from 'baseui/input'
import { createUseStyles } from 'react-jss'
import type { Value } from 'baseui/select'
import { Select } from 'baseui/select'

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
    const [value, setValue] = useState(props.link)
    const [title, setTitle] = useState(props.title)
    const styles = useStyles()
    const [chanel, setChannel] = React.useState<Value>([])

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
                        value={value}
                        size={SIZE.compact}
                        onChange={e => setValue(e.target.value)}
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
                        value={value}
                        onChange={e => setValue(e.target.value)}
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
                marginTop: '18px',
            }}
            >
                <div>
                    <Select
                        options={[
                            { id: 'AliceBlue', color: '#F0F8FF' },
                            { id: 'AntiqueWhite', color: '#FAEBD7' },
                            { id: 'Aqua', color: '#00FFFF' },
                            { id: 'Aquamarine', color: '#7FFFD4' },
                            { id: 'Azure', color: '#F0FFFF' },
                            { id: 'Beige', color: '#F5F5DC' },
                        ]}
                        labelKey="id"
                        valueKey="color"
                        onChange={({ value }) => setChannel(value)}
                        value={chanel}
                        overrides={{
                            ControlContainer: {
                                style: ({ _$theme }) => ({
                                    backgroundColor: '#404040',
                                    borderColor: '#404040',
                                }),
                            },
                            ValueContainer: {
                                style: ({ _$theme }) => ({
                                    backgroundColor: '#404040',
                                    margin: '0',
                                    padding: '0',
                                }),
                            },
                            Placeholder: {
                                style: ({ _$theme }) => ({
                                    color: '#FFFFFF',
                                }),
                            },

                        }}
                    />
                </div>
                <Button
                    onClick={() => { console.log(value) }}
                    overrides={{
                        BaseButton: {
                            style: ({ _$theme }) => ({
                                backgroundColor: '#0670EB',
                                color: '#FFFFFF',
                            }),
                        },
                    }}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}
