import { useTheme } from './ThemeContext'
import './ThemeToggle.css'

const SystemIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const options = [
    { key: 'system', label: 'System', icon: <SystemIcon /> },
    { key: 'light', label: 'Light', icon: <SunIcon /> },
    { key: 'dark', label: 'Dark', icon: <MoonIcon /> }
  ]

  return (
    <div className="theme-toggle">
      {options.map((option) => (
        <button
          key={option.key}
          className={`toggle-option ${theme === option.key ? 'active' : ''}`}
          onClick={() => setTheme(option.key)}
        >
          <span className="toggle-icon">{option.icon}</span>
          <span className="toggle-label">{option.label}</span>
        </button>
      ))}
    </div>
  )
}

export default ThemeToggle