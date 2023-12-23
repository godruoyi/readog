import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider, LightTheme } from 'baseui'
import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { createUseStyles } from 'react-jss'
import { GlobalSuspense } from '../../components/GlobalSuspense'
import { Logo } from './Logo'
import { Header } from './Header'
import { Content } from './Content'

const engine = new Styletron()

export function Settings() {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <GlobalSuspense>
                    <InnerSettings />
                </GlobalSuspense>
            </BaseProvider>
        </StyletronProvider>
    )
}

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

export function InnerSettings() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <Logo />

                <div className={classes.mlr}>
                    <Header></Header>
                    <Content></Content>
                </div>
            </div>
        </div>
    )
}
