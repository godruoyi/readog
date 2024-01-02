import { FormControl } from 'baseui/form-control'
import { Textarea } from 'baseui/textarea'
import { SIZE } from 'baseui/input'

export function PopupTextarea(props: { value?: string; onChange: (v: string) => void }) {
    return (
        <div style={{
            marginTop: '12px',
        }}
        >
            <FormControl
                // caption="Recording something will simplify locating it later"
                overrides={{
                    Caption: {
                        style: ({ _$theme }) => ({
                            color: '#6B6B6B',
                            paddingLeft: '4px',
                            paddingTop: '0px',
                            marginTop: '0px',
                            fontSize: '11px',
                        }),
                    },
                    ControlContainer: {
                        style: ({ _$theme }) => ({
                            marginBottom: '0',
                        }),
                    },
                }}
            >
                <Textarea
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                    placeholder="Your current thoughts are important, write something here"
                    clearOnEscape
                    size={SIZE.mini}
                    overrides={{
                        Root: {
                            style: ({ _$theme }) => ({
                                borderTopColor: '#262626',
                                borderRightColor: '#262626',
                                borderLeftColor: '#262626',
                                borderBottomColor: '#262626',
                            }),
                        },
                        Input: {
                            style: ({ _$theme }) => ({
                                backgroundColor: '#404040',
                                paddingRight: '10px',
                                paddingLeft: '10px',
                                paddingTop: '5px',
                                color: '#AEAEAE',
                                fontSize: '12px',
                            }),
                        },
                        InputContainer: {
                            style: ({ _$theme }) => ({
                                backgroundColor: '#262626',
                            }),
                        },
                    }}
                />
            </FormControl>
        </div>
    )
}
