import { useEffect, useState } from 'react'
import type { InputOverrides } from 'baseui/input'
import { Input as BaseInput, SIZE } from 'baseui/input'
import type { FormControlOverrides } from 'baseui/form-control'
import { FormControl } from 'baseui/form-control'

export interface InputProps {
    label?: string
    type?: string
    placeholder?: string
    caption?: string
    value?: string
    onChange?: (v: string) => void

    formControlOverrides?: FormControlOverrides
    inputOverrides?: InputOverrides
}

export function Input(props: InputProps) {
    const [value, setValue] = useState(props.value)
    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    return (
        <FormControl
            label={() => props.label}
            caption={() => props.caption}
            overrides={
                !props.formControlOverrides
                    ? {
                            Label: {
                                style: ({ _$theme }) => ({
                                    color: '#D1D1D1',
                                    fontSize: '16px',
                                }),
                            },
                        }
                    : props.formControlOverrides
            }
        >
            <BaseInput
                onChange={(event) => {
                    setValue(event.currentTarget.value)
                    if (props.onChange) {
                        props.onChange(event.currentTarget.value)
                    }
                }}
                type={props.type ?? 'input'}
                placeholder={props.placeholder}
                size={SIZE.mini}
                value={value}
                overrides={props.inputOverrides ?? {}}
            />
        </FormControl>
    )
}
