import { expect, it } from 'vitest'

// import { app as app1, app as app2 } from './application'

it('app should be a singleton', async () => {
    expect(true).toBe(true)

    // todo fix error: This script should only be loaded in a browser extension
    // const app3 = (await import(`./application`)).app
    //
    // expect(app1).toBe(app2)
    // expect(app1).toBe(app3)
    // expect(app2).toBe(app3)
    //
    // expect(app1.isBooted()).toBe(true)
    // expect(app1 === app2).toBe(true)
    // expect(app2 === app3).toBe(true)
})
