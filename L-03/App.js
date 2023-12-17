import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = React.createElement(
  'h1',
  { class: 'heading' },
  'Hello world from react'
);

const jsxHeading = <h1 class='heading'>Hello World from react</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

// Functional Component In React (Has to be PascalCase)
const Heading = () => {
  return <h1>Heading</h1>;
};

const badAPI = () => {
  return new Promise((resolve, reject) => {
    resolve('Malacious Data');
  });
};

const virus = badAPI();

let MalaciousData = '';

virus.then((msg) => {
  MalaciousData = msg;
});

// when we are directly injecting javascript directly into the jsx. Jsx won't directly trust the jscode and
// Inject it. instead It sanitises the data and it cross checks everything so that we can prevent
// cross site scripting attacks from happening.

const Content = () => {
  return (
    <div>
      {MalaciousData}
      <Heading />
      <p>Paragraph Element</p>
      <span>Span Element</span>
    </div>
  );
};

// root.render(Heading());

root.render(<Content />);
