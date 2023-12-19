import { Button } from 'baseui/button'
import { Plus } from 'baseui/icon'

export function PopupFooter(props: { onSubmit: () => void }) {
    return (
        <div style={{
            display: 'grid',
            marginBottom: '12px',
        }}
        >
            <Button
                onClick={props.onSubmit}
                startEnhancer={() => <Plus size={24} />}
                overrides={{
                    BaseButton: {
                        style: ({ _$theme }) => ({
                            backgroundColor: '#0670EB',
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
                SAVE
            </Button>
        </div>
    )
}
