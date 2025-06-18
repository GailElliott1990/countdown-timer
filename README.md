# Countdown Timer to July 5th, 8am

A clean, minimal React web application that displays a live countdown timer showing the hours and minutes remaining until 8am on Saturday, July 5th, 2025.

## Features

- **Real-time Updates**: Automatically updates every minute
- **Clean Design**: Minimal, modern interface optimized for Safari
- **Responsive**: Works on both desktop and mobile devices
- **Dark/Light Theme**: Automatically adapts to system preferences
- **Safari Optimized**: Includes specific optimizations for Safari browsers

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd countdown_timer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Safari:**
   - The app will be available at `http://localhost:5173/`
   - Open Safari and navigate to this URL

### Production Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
countdown_timer/
├── src/
│   ├── CountdownTimer.jsx    # Main countdown component
│   ├── App.jsx              # Root application component
│   ├── App.css              # Styling for the countdown
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## How It Works

The countdown timer:
- Calculates the time difference between now and July 5th, 2025 at 8:00 AM
- Updates every minute to show current hours and minutes remaining
- Displays "Time's Up!" message when the target time is reached
- Uses responsive design with CSS clamp() for scalable text
- Includes subtle animations like a pulsing colon separator

## Customization

To change the target date/time, edit the `target` variable in `src/CountdownTimer.jsx`:

```javascript
const target = new Date('2025-07-05T08:00:00');
```

## Browser Compatibility

Optimized for modern browsers, especially Safari. Includes:
- CSS custom properties for theming
- Responsive design with clamp() functions
- Safari-specific font smoothing optimizations