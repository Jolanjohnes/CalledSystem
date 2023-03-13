import { Called } from './pages/Called'
import { ContextProvider } from './contexts/calledContext'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Called />
      </ContextProvider>
    </div>
  )
}

export default App
