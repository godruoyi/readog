import antfu from '@antfu/eslint-config'

export default antfu({
    // Enable stylistic formatting rules
    // stylistic: true,

    // Or customize the stylistic rules
    stylistic: {
        indent: 4, // 4, or 'tab'
        quotes: 'single', // or 'double'
    },

    rules: {
        'no-console': 'off',
        'curly': ['error', 'all'],
        'node/prefer-global/process': 'off',
    },

    // TypeScript and Vue are auto-detected, you can also explicitly enable them:
    typescript: true,
    vue: true,

    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,

    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
        './fixtures',
        // ...globs
    ],
})
