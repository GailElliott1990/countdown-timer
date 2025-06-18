import { useTheme } from './ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  
  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return '☀️'
      case 'dark': return '🌙'
      case 'auto': return '🔄'
      default: return '🔄'
    }
  }
  
  const getThemeLabel = () => {
    switch (theme) {
      case 'light': return 'Light'
      case 'dark': return 'Dark'
      case 'auto': return 'Auto'
      default: return 'Auto'
    }
  }

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      title={`Current theme: ${getThemeLabel()}. Click to cycle themes.`}
    >
      <span className="theme-icon">{getThemeIcon()}</span>
      <span className="theme-label">{getThemeLabel()}</span>
    </button>
  )
}

export default ThemeToggle