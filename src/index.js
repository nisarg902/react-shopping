import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AmazonComponents from './components/NetflixRegisterComponents';
import NetflixRegisterComponents from './components/NetflixRegisterComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NetflixRegisterComponents />
  </React.StrictMode>
);
