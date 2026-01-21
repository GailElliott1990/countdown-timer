import { useEffect, useMemo, useState } from 'react'

const YEAR = 1000 * 60 * 60 * 24 * 365.25  // Average year accounting for leap years
const DAY = 1000 * 60 * 60 * 24
const HOUR = 1000 * 60 * 60
const MINUTE = 1000 * 60

const formatAnchor = (date) => {
  const safeDate = date instanceof Date && !Number.isNaN(date) ? date : new Date()
  return safeDate.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })
}

const numberFormatter = new Intl.NumberFormat('en-US')

const LABEL = 'November 30, 1990 at 8:00 PM'
const ANCHOR = new Date('1990-11-30T20:00:00')

const TimeSince = () => {
  const label = LABEL
  const anchor = ANCHOR
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const elapsed = useMemo(() => {
    const delta = now - anchor.getTime()
    const direction = delta >= 0 ? 'since' : 'until'
    const magnitude = Math.abs(delta)

    const years = Math.floor(magnitude / YEAR)
    const days = Math.floor((magnitude % YEAR) / DAY)
    const hours = Math.floor((magnitude % DAY) / HOUR)
    const minutes = Math.floor((magnitude % HOUR) / MINUTE)
    const seconds = Math.floor((magnitude % MINUTE) / 1000)

    const totalDays = Math.floor(magnitude / DAY)
    const totalHours = Math.floor(magnitude / HOUR)
    const totalMinutes = Math.floor(magnitude / MINUTE)
    const totalSeconds = Math.floor(magnitude / 1000)

    return { direction, years, days, hours, minutes, seconds, totalDays, totalHours, totalMinutes, totalSeconds }
  }, [anchor, now])

  const directionLabel = elapsed.direction === 'since' ? 'Elapsed' : 'Starts in'
  const normalizedLabel = label.trim() || 'this moment'

  return (
    <div className="time-since-app">
      <div className="time-since-shell">
        <div className="hero">
          <div className="eyebrow">Live tracker</div>
          <h1>Time {elapsed.direction === 'since' ? 'since' : 'until'} {normalizedLabel}</h1>
          <p className="lede">Anchored to {formatAnchor(anchor)}</p>
        </div>

        <div className="panel-grid">
          <div className="card timer-card">
            <div className="pill">{directionLabel}</div>
            <div className="time-grid">
              {[{ key: 'years', label: 'Years', value: elapsed.years }, { key: 'days', label: 'Days', value: elapsed.days }, { key: 'hours', label: 'Hours', value: elapsed.hours }, { key: 'minutes', label: 'Minutes', value: elapsed.minutes }, { key: 'seconds', label: 'Seconds', value: elapsed.seconds }].map((item) => (
                <div className="time-block" key={item.key}>
                  <div className="time-value">{item.value.toString().padStart(2, '0')}</div>
                  <div className="time-label">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="muted">Tracking {elapsed.direction === 'since' ? 'elapsed' : 'remaining'} time relative to {formatAnchor(anchor)}.</p>
          </div>
        </div>

        <div className="stat-grid">
          <div className="stat">
            <div className="stat-label">Total days</div>
            <div className="stat-value">{numberFormatter.format(elapsed.totalDays)}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Total hours</div>
            <div className="stat-value">{numberFormatter.format(elapsed.totalHours)}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Total minutes</div>
            <div className="stat-value">{numberFormatter.format(elapsed.totalMinutes)}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Total seconds</div>
            <div className="stat-value">{numberFormatter.format(elapsed.totalSeconds)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeSince
