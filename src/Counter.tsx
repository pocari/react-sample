import React, { useState } from 'react';
import { Card, Statistic, Button } from 'semantic-ui-react';

const Conter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div className="container">
      <header>
        <h1>カウンター</h1>
      </header>
      <Card>
        <Statistic classname="number-board">
          <Statistic.Label>count</Statistic.Label>
          <Statistic.Value>{count}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" onClick={() => decrement()}>
              -1
            </Button>
            <Button color="green" onClick={() => increment()}>
              +1
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Conter;
