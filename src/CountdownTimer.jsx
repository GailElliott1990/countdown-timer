import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isTargetReached, setIsTargetReached] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date('2025-10-21T00:00:00');
      
      const difference = target.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
        setIsTargetReached(false);
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        setIsTargetReached(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  if (isTargetReached) {
    return (
      <div className="countdown-container">
        <div className="countdown-display">
          <h1>Time's Up!</h1>
          <p>It's now past midnight on Tuesday, October 21st, 2025</p>
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-container">
      <div className="countdown-display">
        <h1>Time Until Midnight</h1>
        <h2>Tuesday, October 21st, 2025</h2>
        <div className="time-display">
          <div className="time-unit">
            <span className="time-number">{timeLeft.hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <span className="time-number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <span className="time-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;