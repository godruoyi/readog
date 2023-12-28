import { createUseStyles } from 'react-jss'
import { clsx } from 'clsx'
import { Button } from 'baseui/button'
import { SIZE } from 'baseui/input'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { Switch } from '../../components/Switch'
import { getProviderSettings, syncProviderSettings } from '../../supports/storage'

const useStyles = createUseStyles({
    container: {
        display: 'none',
    },
    t0: {
        marginTop: '0px',
    },
    t12: {
        marginTop: '12px',
    },
    open: {
        display: 'block',
    },
})

interface ContentGeneralProps {
    display: boolean
}

export function Setting(props: ContentGeneralProps) {
    const styles = useStyles()
    const [folder, setFolder] = useState('#Readog')
    const [enable, setEnable] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            const settings = await getProviderSettings('bear')

            setFolder(settings.folder ?? '')
            setEnable(settings.enable ?? false)
        })()
    }, [])

    const buttonSave = async () => {
        setLoading(true)

        await syncProviderSettings('bear', {
            folder,
            enable,
        })
        setLoading(false)
    }

    return (
        <div className={clsx(styles.container, { [styles.open]: props.display })}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
            >
                <h1 className={styles.t0}>Bear APP</h1>
                <Switch checked={enable} onChange={setEnable}></Switch>
            </div>
            <div style={{
                marginTop: '18px',
            }}
            >
                <Input
                    label="Bear Tags"
                    caption="The tags will be created in Bear app automatically, each link will be single note in this tag."
                    placeholder="Which tags do you want to save, default is #Readog Next"
                    type="input"
                    value={folder}
                    onChange={setFolder}
                />

                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
                >
                    <Button
                        size={SIZE.mini}
                        onClick={buttonSave}
                        isLoading={loading}
                        overrides={{
                            BaseButton: {
                                style: {
                                    backgroundColor: '#0670EB',
                                    width: '100px',
                                },
                            },
                        }}
                    >
                        SAVE
                    </Button>
                </div>
            </div>
        </div>
    )
}

export function Logo() {
    return (
        <svg width="26" height="26" viewBox="0 0 535 549" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_4)">
                <g mask="url(#mask0_1_4)">
                    <rect x="14" y="4" width="507" height="521" rx="124" fill="url(#paint1_linear_1_4)" />
                    <g filter="url(#filter1_d_1_4)">
                        <path d="M202.5 155.291C194.5 142.291 161.5 122.791 145 129.291C131.122 134.758 132.5 153.291 132.5 181.791C107.5 216.291 100.397 220.291 82 261.291C56.6478 317.791 30 386.291 14 525.291H354C333.5 483.291 303.5 458.791 285.5 384.791C272.772 332.465 348 344.291 376 333.791C413 319.916 431.621 290.291 435 269.291C441.678 227.791 427.5 236.041 411 233.291C387 229.291 343.5 207.291 310 174.291C287.126 151.758 251.5 151.291 202.5 155.291Z" fill="white" />
                    </g>
                    <mask id="mask1_1_4" maskUnits="userSpaceOnUse" x="14" y="128" width="423" height="398">
                        <path d="M202.5 155.291C194.5 142.291 161.5 122.791 145 129.291C131.122 134.758 132.5 153.291 132.5 181.791C107.5 216.291 100.397 220.291 82 261.291C56.6478 317.791 30 386.291 14 525.291H354C333.5 483.291 303.5 458.791 285.5 384.791C272.772 332.465 348 344.291 376 333.791C413 319.916 431.621 290.291 435 269.291C441.678 227.791 427.5 236.041 411 233.291C387 229.291 343.5 207.291 310 174.291C287.126 151.758 251.5 151.291 202.5 155.291Z" fill="white" />
                    </mask>
                    <g mask="url(#mask1_1_4)">
                        <g filter="url(#filter2_f_1_4)">
                            <path d="M240.5 289.5C158.5 278.3 230 442.167 276 525.5V541H448.5L458.5 279C450 283.333 432 287 418 289.5C405.655 291.704 343 303.5 240.5 289.5Z" fill="url(#paint2_linear_1_4)" />
                        </g>
                        <g filter="url(#filter3_f_1_4)">
                            <path d="M247.607 346.902C231.034 365.889 273.842 461.522 329.462 502H439.129L447 294C434.932 297.473 405.548 304.862 379.836 313.237C344.155 324.859 272.794 318.046 247.607 346.902Z" fill="#E9BEBE" />
                        </g>
                        <g filter="url(#filter4_f_1_4)">
                            <path d="M14 489C33 370 70 269 124.5 202.5C146.298 175.903 146.736 161.555 145.339 154.919C145.041 153.896 144.759 152.922 144.5 152C144.76 152.728 145.081 153.692 145.339 154.919C150.594 172.947 160.948 205.875 144.5 225C123 250 57 399.5 40 548.5L14 489Z" fill="url(#paint3_linear_1_4)" />
                        </g>
                    </g>
                </g>
            </g>
            <defs>
                <filter id="filter0_d_1_4" x="0" y="0" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4" result="shape" />
                </filter>
                <filter id="filter1_d_1_4" x="-3" y="106" width="474.689" height="449.291" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="9" dy="4" />
                    <feGaussianBlur stdDeviation="13" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4" result="shape" />
                </filter>
                <filter id="filter2_f_1_4" x="143.035" y="219" width="375.465" height="382" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_1_4" />
                </filter>
                <filter id="filter3_f_1_4" x="214" y="264" width="263" height="268" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1_4" />
                </filter>
                <filter id="filter4_f_1_4" x="-8" y="130" width="183.415" height="440.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_1_4" />
                </filter>
                <linearGradient id="paint0_linear_1_4" x1="268" y1="4.00001" x2="268" y2="525" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E54B4B" />
                    <stop offset="0.251908" stopColor="#E24848" />
                    <stop offset="1" stopColor="#BB2727" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_4" x1="268" y1="4.00001" x2="268" y2="525" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E54B4B" />
                    <stop offset="0.251908" stopColor="#E24848" />
                    <stop offset="1" stopColor="#BB2727" />
                </linearGradient>
                <linearGradient id="paint2_linear_1_4" x1="203" y1="279" x2="330.768" y2="541" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0190067" stopColor="#E9E7E8" />
                    <stop offset="0.266754" stopColor="#DCD6D6" />
                    <stop offset="0.711014" stopColor="#CBABAB" />
                    <stop offset="1" stopColor="#BFAEAE" />
                </linearGradient>
                <linearGradient id="paint3_linear_1_4" x1="174.5" y1="130" x2="89.4525" y2="548.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FBEEEE" />
                    <stop offset="1" stopColor="#F7E9E9" />
                </linearGradient>
            </defs>
        </svg>

    )
}
