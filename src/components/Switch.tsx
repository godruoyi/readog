import { Checkbox, STYLE_TYPE } from 'baseui/checkbox'
import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { getSettings, syncSettings } from '../supports/storage'

interface SwitchProps {
    name?: string
    description?: string
    onChange?: (checked: boolean) => void
    checked?: boolean
    autosave?: boolean
    saveKey?: string
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
        if (props.autosave && props.saveKey) {
            ;(async () => {
                const settings = await getSettings()
                const key = props.saveKey ?? 'checked'

                // eslint-disable-next-line ts/ban-ts-comment
                // @ts-expect-error
                const v = settings[key] as boolean

                setChecked(v)
            })()

            return
        }

        setChecked(props.checked ?? false)
    }, [props.checked])

    const styles = useStyles()

    const onChange = async (v: boolean) => {
        setChecked(v)
        if (props.onChange) {
            props.onChange(v)

            return
        }

        if (props.autosave && props.saveKey) {
            const settings = await getSettings()
            await syncSettings({
                ...settings,
                [props.saveKey ?? 'checked']: v,
            })
        }
    }

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
                <br />
                {
                    props.description
                        ? React.createElement('span', { style: { margin: '0', color: '#D2D2D2', fontSize: '10px' } }, [
                            props.description,
                        ])
                        : undefined
                }
            </div>
            <div className={styles.checkbox}>
                <Checkbox
                    checked={checked}
                    onChange={(e) => { onChange(e.currentTarget.checked) }}
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
