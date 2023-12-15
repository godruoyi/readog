import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    container: {
        backgroundColor: '#262626',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        color: '#fff',
    },
    innerContainer: {
        padding: '48px 160px',
        display: 'flex',
    },
    mlr: {
        marginLeft: '24px',
        marginRight: '24px',
        width: '100%',
    },
})

export default useStyles
