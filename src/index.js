import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  <Router><React.StrictMode>
  <App/>
  </React.StrictMode></Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
