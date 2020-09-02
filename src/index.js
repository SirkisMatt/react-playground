/*import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
//import App from './App';
import App from './paltrows-power-toes/App';
import './index.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLang from './lang-context/AppLang';

ReactDOM.render(
  <AppLang />,
  document.getElementById('root')
);