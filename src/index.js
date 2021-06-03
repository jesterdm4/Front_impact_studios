import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from './View';
import reportWebVitals from './reportWebVitals';

import './Theme/reset.scss'
import './Theme/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
