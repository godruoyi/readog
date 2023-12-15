import { Checkbox, STYLE_TYPE } from 'baseui/checkbox'
import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

interface SwitchProps {
    name?: string
    description?: string
    onChange?: (checked: boolean) => void
    checked?: boolean
}

const useStyles = createUseStyles({
    switch: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#E7E7E7',
        margin: '10px 0',
        marginTop: '0',
    },
    checkbox: {
        right: '0',
        // alignItems: 'center',
        // display: 'flex',
        // height: '30px',
    },
    name: {
        fontSize: '14px',
        // height: '30px',
        lineHeight: '30px',
    },
})

export function Switch(props: SwitchProps) {
    const [checked, setChecked] = useState(props.checked ?? false)

    useEffect(() => {
        setChecked(props.checked ?? false)
    }, [props.checked])

    const styles = useStyles()

    return (
        <div className={styles.switch}>
            <div style={{
                marginRight: '30px',
            }}
            >
                {
                    props.name
                        ? React.createElement('label', { className: styles.name }, [
                            props.name,
                        ])
                        : undefined
                }
                {
                    props.description
                        ?? React.createElement('p', { style: { margin: '0', color: '#D2D2D2' } }, [
                            props.description,
                        ])
                }
            </div>
            <div className={styles.checkbox}>
                <Checkbox
                    checked={checked}
                    onChange={(e) => {
                        setChecked(e.currentTarget.checked)

                        if (props.onChange) {
                            props.onChange(e.currentTarget.checked)
                        }
                    }}
                    checkmarkType={STYLE_TYPE.toggle_round}
                    overrides={{
                        Toggle: {
                            style: ({ _$theme }) => ({
                                backgroundColor: '#FFFFFF',
                                height: '20px',
                            }),
                        },
                        ToggleTrack: {
                            style: ({ _$theme }) => ({
                                backgroundColor: checked ? '#3170E2' : '#717171',
                                height: '17px',
                            }),
                        },
                        ToggleInner: {
                            style: ({ _$theme }) => ({
                                height: '17px',
                            }),
                        },
                    }}
                >
                </Checkbox>
            </div>
        </div>
    )
}
