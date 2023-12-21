import { Button } from 'baseui/button'
import { Plus } from 'baseui/icon'
import { useEffect, useState } from 'react'

export function PopupFooter(props: { onSubmit: () => void; loading?: boolean }) {
    const [loading, setLoading] = useState(props.loading || false)
    useEffect(() => {
        setLoading(props.loading || false)
    }, [props.loading])

    return (
        <div style={{
            display: 'grid',
            marginBottom: '12px',
        }}
        >
            <Button
                onClick={() => {
                    setLoading(true)

                    props.onSubmit()
                }}
                startEnhancer={() => <Plus size={24} />}
                isLoading={loading}
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
