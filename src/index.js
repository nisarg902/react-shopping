import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AmazonComponents from './components/AmazonComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AmazonComponents />
  </React.StrictMode>
);
