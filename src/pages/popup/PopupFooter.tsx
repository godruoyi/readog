import { Button } from 'baseui/button'
import React, { useEffect, useState } from 'react'
import type { IError } from '../../types'

export function PopupFooter(props: { onSubmit: () => void; loading?: boolean; errors?: IError[]; finished?: boolean }) {
    const [loading, setLoading] = useState(props.loading || false)
    const [saveText, setSaveText] = useState('SAVE')
    const [errors, setErrors] = useState(props.errors || [])
    const saveFailed: string = 'SAVE FAILED'

    useEffect(() => {
        setLoading(props.loading || false)
    }, [props.loading])

    useEffect(() => {
        if (props.errors) {
            setErrors(props.errors || [])
        }

        if (props.finished) {
            setSaveText(props?.errors?.length ? saveFailed : 'SAVE SUCCESS')
        }
    }, [props.finished, props.errors])

    return (
        <div>
            {
                errors.length > 0
                    ? React.createElement('div', { style: {
                        color: '#6A6969',
                        fontSize: '10px',
                        marginTop: '8px',
                        marginBottom: '5px',
                    } }, [
                        errors.map((e: IError, index: number) => React.createElement('div', {
                            key: index,
                            style: {
                                lineHeight: '12px',
                            },
                        }, [e.message])),
                    ])
                    : undefined
            }
            <div style={{
                display: 'grid',
                marginBottom: '10px',
                height: '32px',
                marginTop: errors.length > 0 ? '0px' : '12px',
            }}
            >
                <Button
                    onClick={() => {
                        setLoading(true)

                        props.onSubmit()
                    }}
                    isLoading={loading}
                    overrides={{
                        BaseButton: {
                            style: ({ _$theme }) => ({
                                backgroundColor: saveText === saveFailed ? '#4F4F4F' : '#0670EB',
                                color: '#FFFFFF',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                height: '32px',
                                borderTopLeftRadius: '4px',
                                borderTopRightRadius: '4px',
                                borderBottomLeftRadius: '4px',
                                borderBottomRightRadius: '4px',
                            }),
                        },
                    }}
                >
                    {saveText}
                </Button>
            </div>
        </div>
    )
}
