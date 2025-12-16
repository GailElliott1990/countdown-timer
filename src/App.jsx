import TimeSince from './TimeSince'
import ThemeToggle from './ThemeToggle'
import FloatingDust from './FloatingDust'
import { ThemeProvider } from './ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <FloatingDust />
      <div className="app">
        <ThemeToggle />
        <TimeSince />
      </div>
    </ThemeProvider>
  )
}

export default App
