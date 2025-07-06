# CLAUDE.md

<!-- Model: claude-opus-4-20250514 -->

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a React-based countdown timer application built with Vite. It displays a real-time countdown to July 5th, 2025 at 8:00 AM with a clean, minimal interface and theme support.

## Common Development Commands

### Development Workflow
```bash
# Install dependencies
npm install

# Start development server (runs on port 5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Code Architecture

### Component Structure
- **App.jsx**: Root component that wraps the application with ThemeProvider
- **CountdownTimer.jsx**: Main countdown logic and display component
- **ThemeContext.jsx**: Context provider for theme state management (system/light/dark)
- **ThemeToggle.jsx**: Theme switcher component with Vercel-style design

### Key Features
1. **Real-time Countdown**: Updates every second using React hooks (useState, useEffect)
2. **Theme System**: 
   - Three modes: System (auto), Light, Dark
   - Persists preference in localStorage
   - Uses CSS custom properties with data-theme attribute
3. **Responsive Design**: Uses CSS clamp() for scalable typography
4. **Target Date**: Hardcoded to `2025-07-05T08:00:00` in CountdownTimer.jsx:10

### Styling Pattern
- Component-specific CSS files (App.css, ThemeToggle.css)
- Global styles in index.css
- CSS custom properties for theme colors
- Responsive units with clamp() functions

## Configuration Files

### vite.config.js
Standard Vite configuration with React plugin.

### eslint.config.js
- Ignores dist directory
- Uses recommended rules from @eslint/js and react-hooks
- Custom rule for unused variables (allows UPPERCASE patterns)
- React Refresh plugin for HMR

### vercel.json
Deployment configuration for Vercel platform with standard build commands.

## Important Notes

- No test framework is currently configured
- Target date is hardcoded - modify in CountdownTimer.jsx:10 to change
- Theme preference stored in localStorage under 'theme' key
- Safari-optimized with specific font smoothing