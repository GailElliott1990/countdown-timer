# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based countdown timer web application built with Vite that displays time remaining until July 5th, 2025 at 8:00 AM. The app is optimized for Safari and deployed on Vercel.

## Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Create production build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Deployment
The app is configured for Vercel deployment with automatic builds from the `dist/` directory.

## Architecture

**Component Structure:**
- `App.jsx` - Root component with ThemeProvider wrapper and main application structure
- `CountdownTimer.jsx` - Core countdown logic with React hooks for state management and time calculations
- `ThemeToggle.jsx` - Vercel-style theme switcher with System/Light/Dark options
- `ThemeContext.jsx` - React context for centralized theme state management
- Target date is hardcoded as `new Date('2025-07-05T08:00:00')` in CountdownTimer component

**Key Features:**
- Real-time updates every second using `setInterval`
- Responsive design with CSS clamp() for scalable typography
- Vercel-style theme toggle with professional SVG icons
- System theme detection that follows OS preferences
- Theme preference persistence via localStorage
- Safari-specific optimizations including font smoothing

**Time Calculation Logic:**
- Calculates difference between current time and target date
- Converts milliseconds to hours, minutes, and seconds
- Displays "Time's Up!" message when target is reached
- Uses `padStart()` for consistent two-digit formatting

**Styling Approach:**
- CSS custom properties for theming with automatic dark/light mode detection
- Responsive units and clamp() functions
- Component-scoped styles in `App.css`
- Global styles in `index.css`
- Vertically centered time separator colons with adjusted line-height and margin for proper alignment

**Theme System:**
- **Vercel-Style Toggle**: Fixed-position button in top-right corner with icon-text layout
- **Three Theme Options**:
  - **System** (🖥️): Follows OS `prefers-color-scheme` preference automatically
  - **Light** (☀️): Cream background (#fbfbf6) with dark text
  - **Dark** (🌙): Dark background (#242424) with light text
- **Professional Icons**: Custom SVG icons (monitor, sun, moon) inspired by Lucide design
- **Theme Persistence**: User preference saved in localStorage with system as default
- **Modern Styling**: Backdrop blur, glass-morphism effects, and Vercel-inspired aesthetics
- **Responsive Design**: Adaptive icon sizes and spacing for mobile devices
- **Smooth Transitions**: Fast 0.15s animations for modern app experience

## Key Files

- `src/CountdownTimer.jsx` - Main countdown component with time calculation logic
- `src/ThemeContext.jsx` - React context for theme state management with system detection
- `src/ThemeToggle.jsx` - Vercel-style theme toggle with SVG icons and accessibility
- `src/ThemeToggle.css` - Theme toggle styling with glass-morphism and responsive design
- `src/App.css` - Primary styling with responsive design, animations, and theme variables
- `src/index.css` - Global styles with manual theme overrides and base styling
- `vercel.json` - Vercel deployment configuration
- `vite.config.js` - Vite build configuration with React plugin