import { Button } from 'baseui/button'
import { useEffect, useState } from 'react'
import { Plus } from 'baseui/icon'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    logo: {
        width: '15px',
        height: '15px',
    },
})

export function PopupFooter(props: { onSubmit: () => void; loading?: boolean }) {
    const [loading, setLoading] = useState(props.loading || false)
    const styles = useStyles()

    useEffect(() => {
        setLoading(props.loading || false)
    }, [props.loading])

    return (
        <div style={{
            display: 'flex',
            marginTop: '22px',
            marginBottom: '120px',
            marginLeft: '6px',
            height: '32px',
            justifyContent: 'space-between',
        }}
        >
            <div>
                <div style={{
                    height: '32px',
                    gap: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#404040',
                }}
                >
                    <select>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                    </select>
                </div>
            </div>
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
