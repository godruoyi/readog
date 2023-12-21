import { expect, it } from 'vitest'

it('sort class name', () => {
    class hello { }
    class world { }
    class A { }
    class z { }

    const a = [hello, world, A, z].sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    expect(a).toEqual([A, hello, world, z])
})
