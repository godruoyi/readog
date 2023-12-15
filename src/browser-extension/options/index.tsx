import '../../supports/enableDevHMR'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { Settings } from '../../pages/setting/Settings'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Settings></Settings>,
)
