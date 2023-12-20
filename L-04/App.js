import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { v4 } from 'uuid';

const market = [
  '🍊',
  '🟠',
  '🍏',
  '🍎',
  '🫛',
  '🍑',
  '🍐',
  '🦪',
  '🥜',
  '🦚',
  '🥭',
  '🍍',
  '🍆',
  '🥬',
];
const Header = () => {
  return <p>This is Header</p>;
};

const Body = () => {
  const [fruits, setFruits] = useState([{}]);

  const handleClick = () => {
    let newFruits = [...fruits];
    let idx = Math.round(Math.random() * newFruits.length);
    let randomFruit = market[Math.round(Math.random() * market.length)];
    newFruits.splice(idx, 0, { id: v4(), fruit: randomFruit });
    setFruits(newFruits);
  };

  return (
    <React.Fragment>
      {fruits.length > 0 && (
        <ul>
          {fruits.map((fruitObj) => (
            <li key={fruitObj.id}>{fruitObj.fruit}</li>
          ))}
        </ul>
      )}
      <button onClick={handleClick}>Add</button>
    </React.Fragment>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      {/* COMMENT IN JSX */}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
