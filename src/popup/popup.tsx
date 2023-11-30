import '../supports/enableDevHMR'
import './popup.css'
import { createRoot } from 'react-dom/client'
import { useEffect, useState } from 'react'
import { GlobalDialog } from '../components/GlobalDialog'

const root = createRoot(document.getElementById('root') as HTMLElement)

function App() {
    const [currentUrl, setCurrentUrl] = useState<string>('')
    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            setCurrentUrl(tabs[0].url ?? '')
        })
    })

    return (
        <GlobalDialog link={currentUrl} title="Hello" />
    )
}

root.render(<App />)
