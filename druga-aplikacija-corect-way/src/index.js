import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Page = 
    <div>
      <h1>test1</h1>
      <h2>test2</h2>
      <h3>test3</h3>
      <h4>test4</h4>
      <h5>test5</h5>
    </div>



const rootElem = document.getElementById("root");

rootElem.append(JSON.stringify(Page))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Page/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
