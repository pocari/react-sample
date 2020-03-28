import React, { useState, useEffect, useCallback } from 'react';
import TimerComponent from 'components/TimerComponent';

const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec);

  const reset = useCallback(() => {
    setTimeLeft(limitSec);
  }, [limitSec]);

  const tick = useCallback(() => {
    setTimeLeft(s => (s === 0 ? limitSec : s - 1));
  }, [limitSec]);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, [tick]);

  return [timeLeft, reset];
};

const Timer: React.FC = () => {
  const LIMIT = 60;
  const [timeLeft, reset] = useTimer(LIMIT);

  return <TimerComponent timeLeft={timeLeft} reset={reset} />;
};

export default Timer;
