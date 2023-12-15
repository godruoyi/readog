import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider, LightTheme } from 'baseui'
import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { GlobalSuspense } from '../../components/GlobalSuspense'
import useStyles from './css'
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
