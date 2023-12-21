import { beforeAll, vi } from 'vitest'

beforeAll(() => {
    // not work now
    vi.stubGlobal('chrome', {
        storage: {
            local: {
                get: vi.fn(() => ({})),
                set: vi.fn(),
                remove: vi.fn(),
            },
            sync: {
                get: vi.fn(() => ({})),
                set: vi.fn(),
                remove: vi.fn(),
            },
            session: {
                get: vi.fn(() => ({})),
                set: vi.fn(),
                remove: vi.fn(),
            },
        },
        runtime: {
            getURL: (url: string) => `https://local.io/${url}`,
        },
    })
})
