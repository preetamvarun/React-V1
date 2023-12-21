import { useState } from 'react';
import Counter from './Counter';

const KeysIssue = () => {
  let [swap, setSwap] = useState(true);

  function handleClick() {
    setSwap(!swap);
  }

  return (
    <div>
      {swap ? (
        <Counter name='PURI' key={1} />
      ) : (
        <Counter name='Vanga' key={2} />
      )}
      {/* We want React to Identify Counter component as two unique counters */}
      <button onClick={handleClick}>Swap</button>
    </div>
  );
};

export default KeysIssue;
