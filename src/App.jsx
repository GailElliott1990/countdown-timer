import CountdownTimer from './CountdownTimer'
import ThemeToggle from './ThemeToggle'
import { ThemeProvider } from './ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <CountdownTimer />
      </div>
    </ThemeProvider>
  )
}

export default App
