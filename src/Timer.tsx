import React, { useState, useEffect } from 'react';
import { Statistic, Card, Button, Icon } from 'semantic-ui-react';

const LIMIT = 60;

interface AppState {
  timeLeft: number;
}

const Timer = () => {
  const [appState, setAppState] = useState<AppState>({ timeLeft: LIMIT });

  const tick = () => {
    setAppState(s => ({
      timeLeft: s.timeLeft - 1,
    }));
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => {
      clearInterval(timerId as NodeJS.Timer);
    };
  });

  const reset = () => {
    setAppState({
      timeLeft: LIMIT,
    });
  };

  useEffect(() => {
    if (appState.timeLeft <= 0) {
      reset();
    }
  }, [appState.timeLeft]);

  return (
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{appState.timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" fluid onClick={reset}>
            <Icon name="redo" />
            Reset
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Timer;
