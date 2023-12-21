import { useState } from 'react';

const Counter = ({ name }) => {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(++count);
  }

  return (
    <div>
      <h4>
        {name}'s Counter : {count}
      </h4>

      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter;
