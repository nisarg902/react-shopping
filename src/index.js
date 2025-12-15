import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/bootstrap.css';

import NetflixRegisterComponents from './components/NetflixRegisterComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NetflixRegisterComponents />
  </React.StrictMode>
); 
