import '../supports/enableDevHMR'
import './popup.css'
import { createRoot } from 'react-dom/client'
import { Reader } from '../components/Reader'

const root = createRoot(document.getElementById('root') as HTMLElement)

function App() {
    return (
        <Reader link="test" title="Hello" />
    )
}

root.render(<App />)
