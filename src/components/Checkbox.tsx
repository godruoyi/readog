import { Checkbox as BaseCheckbox, STYLE_TYPE } from 'baseui/checkbox'
import { useEffect, useState } from 'react'

interface CheckboxProps {
    onChange?: (checked: boolean) => void
    checked?: boolean
}

export function Checkbox(props: CheckboxProps) {
    const [checked, setChecked] = useState(props.checked ?? false)
    useEffect(() => {
        setChecked(props.checked ?? false)
    }, [props.checked])

    const onChange = (v: boolean) => {
        setChecked(v)
        if (props.onChange) {
            props.onChange(v)
        }
    }

    return (
        <BaseCheckbox
            checked={checked}
            onChange={(e) => { onChange(e.currentTarget.checked) }}
            checkmarkType={STYLE_TYPE.toggle_round}
            overrides={{
                Root: {
                    style: ({ _$theme }) => ({}),
                },
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
        </BaseCheckbox>
    )
}
