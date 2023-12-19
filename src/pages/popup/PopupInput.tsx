import type { InputProps } from '../../components/Input'
import { Input } from '../../components/Input'

interface PopupInputProps extends InputProps {}

export function PopupInput(props: PopupInputProps) {
    return (
        <Input
            label={props.label}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(v) => {
                if (props.onChange) {
                    props.onChange(v)
                }
            }}
            formControlOverrides={{
                LabelContainer: {
                    style: ({ _$theme }) => ({
                        marginBottom: '0',
                        marginTop: '4px',
                    }),
                },
                Label: {
                    style: ({ _$theme }) => ({
                        color: '#B9ABFD',
                        paddingLeft: '4px',
                    }),
                },
                ControlContainer: {
                    style: ({ _$theme }) => ({
                        marginBottom: '0',
                    }),
                },
            }}
            inputOverrides={{
                Root: {
                    style: ({ _$theme }) => ({
                        borderTopColor: '#262626',
                        borderRightColor: '#262626',
                        borderLeftColor: '#262626',
                        borderBottomColor: '#262626',
                        paddingRight: '0',
                        paddingLeft: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        outline: '0 !important',
                    }),
                },
                Input: {
                    style: ({ $theme }) => ({
                        'backgroundColor': '#262626',
                        'paddingRight': '4px',
                        'paddingLeft': '4px',
                        'color': '#FFFFFF',
                        '::placeholder': {
                            color: '#545454',
                        },
                        ':hover': {
                            cursor: 'text',
                            backgroundColor: '#233A5A',
                            color: '#FDFDFD',
                        },
                    }),
                },
                InputContainer: {
                    style: ({ _$theme }) => ({
                        marginBottom: '0',
                        paddingBottom: '0',
                    }),
                },
            }}
        />
    )
}
