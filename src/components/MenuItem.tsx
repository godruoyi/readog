import React from 'react'
import { createUseStyles } from 'react-jss'
import { clsx } from 'clsx'

interface IMenuItemProps {
    id: string
    logo?: React.ReactNode
    title: string
    selected: boolean
    onClick?: (id: string) => void
}

const useStyles = createUseStyles({
    container: (selected: boolean) => ({
        'width': '240px',
        'height': '40px',
        'color': '#FFFFFF',
        'display': 'flex',
        'padding': '3px 10px',
        'marginBottom': '5px',
        '&:hover': {
            backgroundColor: selected ? '#0670EB' : '#1A2037',
            borderRadius: '4px',
        },
    }),
    logo: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontSize: '18px',
        alignItems: 'center',
        display: 'flex',
        marginLeft: '12px',
    },
    selected: {
        backgroundColor: '#0670EB',
        borderRadius: '4px',
    },
})

export function MenuItem(props: IMenuItemProps) {
    // const [selected, setSelected] = useState(props.selected)
    const styles = useStyles(props.selected)

    return (
        <div
            className={clsx(styles.container, { [styles.selected]: props.selected })}
            onClick={() => {
                console.log('item click', props)
                // setSelected(true)
                if (props.onClick) {
                    props.onClick(props.id)
                }
            }}
        >
            <div className={styles.logo}>
                {props.logo ?? DefaultSettingLogo()}
            </div>
            <div className={styles.title}>{props.title}</div>
        </div>
    )
}

function DefaultSettingLogo() {
    return (
        <svg width="26" height="26" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_48_37)">
                <path d="M5.23004 2.25L5.66004 1.14C5.73256 0.952064 5.86015 0.790411 6.02609 0.676212C6.19204 0.562014 6.3886 0.500595 6.59004 0.5H7.41004C7.61148 0.500595 7.80805 0.562014 7.97399 0.676212C8.13994 0.790411 8.26752 0.952064 8.34004 1.14L8.77004 2.25L10.23 3.09L11.41 2.91C11.6065 2.88333 11.8065 2.91567 11.9846 3.00292C12.1626 3.09017 12.3107 3.22838 12.41 3.4L12.81 4.1C12.9125 4.27435 12.9598 4.47568 12.9455 4.67742C12.9312 4.87916 12.8561 5.07183 12.73 5.23L12 6.16V7.84L12.75 8.77C12.8761 8.92817 12.9512 9.12084 12.9655 9.32258C12.9798 9.52432 12.9325 9.72565 12.83 9.9L12.43 10.6C12.3307 10.7716 12.1826 10.9098 12.0046 10.9971C11.8265 11.0843 11.6265 11.1167 11.43 11.09L10.25 10.91L8.79004 11.75L8.36004 12.86C8.28752 13.0479 8.15994 13.2096 7.99399 13.3238C7.82805 13.438 7.63148 13.4994 7.43004 13.5H6.59004C6.3886 13.4994 6.19204 13.438 6.02609 13.3238C5.86015 13.2096 5.73256 13.0479 5.66004 12.86L5.23004 11.75L3.77004 10.91L2.59004 11.09C2.39356 11.1167 2.19358 11.0843 2.01552 10.9971C1.83747 10.9098 1.68937 10.7716 1.59004 10.6L1.19004 9.9C1.08754 9.72565 1.04032 9.52432 1.0546 9.32258C1.06888 9.12084 1.144 8.92817 1.27004 8.77L2.00004 7.84V6.16L1.25004 5.23C1.124 5.07183 1.04888 4.87916 1.0346 4.67742C1.02032 4.47568 1.06754 4.27435 1.17004 4.1L1.57004 3.4C1.66937 3.22838 1.81747 3.09017 1.99552 3.00292C2.17358 2.91567 2.37356 2.88333 2.57004 2.91L3.75004 3.09L5.23004 2.25ZM5.00004 7C5.00004 7.39556 5.11734 7.78224 5.3371 8.11114C5.55687 8.44004 5.86922 8.69638 6.23467 8.84776C6.60013 8.99913 7.00226 9.03874 7.39022 8.96157C7.77818 8.8844 8.13455 8.69392 8.41426 8.41421C8.69396 8.13451 8.88444 7.77814 8.96161 7.39018C9.03878 7.00222 8.99918 6.60009 8.8478 6.23463C8.69643 5.86918 8.44008 5.55682 8.11118 5.33706C7.78228 5.1173 7.3956 5 7.00004 5C6.46961 5 5.9609 5.21071 5.58583 5.58579C5.21076 5.96086 5.00004 6.46957 5.00004 7Z" stroke="#80C9FA" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_48_37">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
