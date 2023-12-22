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
                caption="Recording something will simplify locating it later"
                overrides={{
                    Caption: {
                        style: ({ _$theme }) => ({
                            color: '#AEAEAE',
                            paddingLeft: '4px',
                            paddingTop: '0px',
                            marginTop: '0px',
                        }),
                    },
                }}
            >
                <Textarea
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                    placeholder="Your thoughts at this moment are important, write something."
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
                            style: ({ $theme }) => ({
                                backgroundColor: '#404040',
                                paddingRight: '10px',
                                paddingLeft: '10px',
                                paddingTop: '5px',
                                color: '#AEAEAE',
                                fontSize: '14px',
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
