import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [counter, setCounter] = useState(0);

  function addOneItem(event) {
    console.log(event);
    return setCounter(counter + 1);
  }
  function subOneItem(event) {
    console.log(event);
    counter > 0
      ? setCounter(counter - 1)
      : console.log('tiene que ser mayor a 0');
  }

  return (
    <div className="d-flex justify-content-center m-4">
      <Button style={{ width: '2rem' }} variant="danger" onClick={subOneItem}>
        -
      </Button>
      <div className="m-3" style={{ width: '2rem' }}>
        {counter}
      </div>

      <Button style={{ width: '2rem' }} variant="success" onClick={addOneItem}>
        +
      </Button>
    </div>
  );
}

export default Counter;
