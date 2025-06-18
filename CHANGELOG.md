# Changelog

All notable changes to the Countdown Timer project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.3] - 2025-06-18

### Added
- Manual theme toggle menu with three options: Auto, Light, Dark
- Fixed position theme toggle button in top-right corner
- Theme preference persistence using localStorage
- Visual theme indicators with emojis (🔄 Auto, ☀️ Light, 🌙 Dark)

### Enhanced
- Theme system now supports manual override of system preferences
- Added backdrop blur effect to theme toggle button
- Improved accessibility with descriptive button titles
- Mobile-responsive theme toggle design

### Technical
- Created ThemeContext for centralized theme state management
- Added ThemeToggle component with React hooks
- Implemented CSS data-theme attribute overrides
- Enhanced theme switching with smooth transitions

## [0.1.2] - 2025-06-18

### Changed
- Updated background color to cream (#fbfbf6) for light mode
- Improved theme system with proper dark/light mode contrast
- Enhanced automatic theme switching based on system preferences

### Technical
- Dark mode: Dark background (#242424) with light text
- Light mode: Cream background (#fbfbf6) with dark text
- Consistent color variables across CSS files

## [0.1.1] - 2025-06-18

### Fixed
- Improved centering for countdown display
- Enhanced visual alignment of timer elements

## [0.1.0] - 2025-06-18

### Added
- Initial countdown timer web application
- React-based countdown to July 5th, 2025 at 8:00 AM
- Real-time updates every second
- Responsive design optimized for Safari
- Dark/light theme support via system preferences
- Clean, minimal interface
- Vercel deployment configuration
- ESLint configuration for code quality

### Features
- Displays hours, minutes, and seconds remaining
- Shows "Time's Up!" message when target is reached
- Pulsing colon separators for visual appeal
- Mobile-responsive design
- Safari-specific font smoothing optimizations