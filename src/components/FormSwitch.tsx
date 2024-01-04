import React, { useEffect, useState } from 'react'
import { FormControl } from 'baseui/form-control'
import { getSettings, syncSettings } from '../supports/storage'
import { Checkbox } from './Checkbox'

interface SwitchProps {
    label?: string
    caption?: string
    checked?: boolean
    autosave?: string
    onChange?: (checked: boolean) => void
}

export function FormSwitch(props: SwitchProps) {
    const [checked, setChecked] = useState(props.checked ?? false)

    useEffect(() => {
        setChecked(props.checked ?? false)
    }, [props.checked])

    useEffect(() => {
        if (props.autosave) {
            ;(async () => {
                const settings = await getSettings()
                const key = props.autosave ?? 'checked'
                // eslint-disable-next-line ts/ban-ts-comment
                // @ts-expect-error
                const v = settings[key] as boolean
                setChecked(v)
            })()
        }
    }, [])

    const onChange = async (v: boolean) => {
        setChecked(v)
        if (props.onChange) {
            props.onChange(v)

            return
        }

        if (props.autosave) {
            const settings = await getSettings()
            await syncSettings({
                ...settings,
                [props.autosave ?? 'checked']: v,
            })
        }
    }

    return (
        <FormControl
            label={() => props.label}
            caption={() => props.caption}
            overrides={{
                Label: {
                    style: ({ _$theme }) => ({
                        color: '#D1D1D1',
                        fontSize: '16px',
                    }),
                },
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '-30px',
            }}
            >
                <Checkbox checked={checked} onChange={onChange} />
            </div>
        </FormControl>
    )
}
