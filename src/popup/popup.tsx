import '../supports/enableDevHMR'
import './popup.css'
import { createRoot } from 'react-dom/client'
import { ReaderBox } from '../components/ReaderBox'

const root = createRoot(document.getElementById('root') as HTMLElement)

function App() {
    return (
        <ReaderBox link="test" title="Hello" />
    )
}

root.render(<App />)
