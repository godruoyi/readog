import { useEffect, useState } from 'react'
import { Input as BaseInput, SIZE } from 'baseui/input'
import { FormControl } from 'baseui/form-control'

interface InputProps {
    label?: string
    type?: string
    placeholder?: string
    caption?: string
    value?: string
    onChange?: (v: string) => void
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
            overrides={{
                Label: {
                    style: ({ _$theme }) => ({
                        color: '#D1D1D1',
                        fontSize: '16px',
                    }),
                },
            }}
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
            />
        </FormControl>
    )
}
