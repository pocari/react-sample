import React, { useState, SyntheticEvent, useCallback } from 'react';
import { Card, Statistic, Button } from 'semantic-ui-react';

interface CounterObj {
  count: number;

}

const Conter = () => {
  const [counter, setCounter] = useState<CounterObj>({ count: 0 });

  const increment = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    setCounter(prev => ({
      count: prev.count + 1,
    }));
  }, []);

  const decrement = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    setCounter(prev => ({
      count: prev.count - 1,
    }));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>カウンター</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>count</Statistic.Label>
          <Statistic.Value>{counter.count}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" onClick={decrement}>
              -1
            </Button>
            <Button color="green" onClick={increment}>
              +1
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Conter;
