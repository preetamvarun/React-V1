const h1 = React.createElement(
  'h1',
  { id: 'heading-id' },
  'Hello world from react'
);

/* This is the exact reason why we have JSX */

const div = React.createElement('div', { id: 'parent' }, [
  React.createElement(
    'div',
    { class: 'children' },
    React.createElement('p', {}, 'Paragraph-1')
  ),
  React.createElement(
    'div',
    { class: 'children' },
    React.createElement('p', {}, 'Paragraph-2')
  ),
  React.createElement(
    'div',
    { class: 'children' },
    React.createElement('p', {}, 'Paragraph-3')
  ),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);

/* Create this structure using core react 
  
  <div id = "parent">
      <div class = "children">
          <p>Paragraph - 1</p>
      </div>
      <div class = "children">
          <p>Paragraph - 2</p>
      </div>
      <div class = "children">
          <p>Paragraph - 3</p>
      </div>
  </div>
  
  
  
  */
