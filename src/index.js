import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NetflixHeaderComponents from './components/NetflixHeaderComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import NetflixIndexComponents  from './components/NetflixIndexComponents';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NetflixIndexComponents />
  </React.StrictMode>
); 
