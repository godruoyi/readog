import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    logo: {
        width: '50px',
        textAlign: 'center',
    },
})

export function Logo() {
    const styles = useStyles()
    return (
        <div className={styles.logo}>
            <svg width="48" height="48" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M11.2727 1.49986C11.1528 1.26585 10.9707 1.06947 10.7463 0.932346C10.522 0.795216 10.2642 0.722656 10.0012 0.722656C9.73831 0.722656 9.4805 0.795216 9.25617 0.932346C9.03183 1.06947 8.8497 1.26585 8.72981 1.49986L0.872668 17.2141C0.763082 17.4316 0.710908 17.6734 0.721101 17.9169C0.731292 18.1601 0.803512 18.3967 0.930901 18.6043C1.05829 18.8119 1.23662 18.9834 1.44895 19.1026C1.66128 19.2219 1.90058 19.2849 2.1441 19.2856H17.8584C18.1018 19.2849 18.3411 19.2219 18.5536 19.1026C18.7658 18.9834 18.9441 18.8119 19.0716 18.6043C19.199 18.3967 19.2711 18.1601 19.2814 17.9169C19.2916 17.6734 19.2394 17.4316 19.1298 17.2141L11.2727 1.49986Z" stroke="#0670EB" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.56618 15.6697L12.455 11.7174H7.54468L10.4335 7.76507" stroke="#0670EB" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        </div>
    )
}
