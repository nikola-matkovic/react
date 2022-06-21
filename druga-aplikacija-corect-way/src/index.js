import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const page = (
  <div>
    <h1>My awesome website in react</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>it's hirable skill</li>
      <li>it's actively maintained by skilled people</li>
    </ol>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <page />
  </React.StrictMode>
);

