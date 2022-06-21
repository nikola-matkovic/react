import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Page() {
  return (
    <div>
      <img src="./logo192.png" alt="React Logo" />
      <h1>Fun fact about react</h1>
      <ul>
        <li>Was first relased in 2013</li>
        <li>Was originally created by Jordan Walks</li>
        <li>Has over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>powewrs thousends of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

