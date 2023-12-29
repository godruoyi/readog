import { Button } from 'baseui/button'
import { useEffect, useState } from 'react'

export function PopupFooter(props: { onSubmit: () => void; loading?: boolean }) {
    const [loading, setLoading] = useState(props.loading || false)

    useEffect(() => {
        setLoading(props.loading || false)
    }, [props.loading])

    return (
        <div style={{
            display: 'grid',
            marginTop: '22px',
            marginBottom: '10px',
            height: '32px',
        }}
        >
            <Button
                onClick={() => {
                    setLoading(true)

                    props.onSubmit()
                }}
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
