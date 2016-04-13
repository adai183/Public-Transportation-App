/**
 *
 * app.js
 *
 * This is the entry file for the application, mostly just setup and boilerplate
 * code. Routes are configured at the end of this file!
 *
 */

// Load the ServiceWorker
import '../serviceworker.js';

// Check for ServiceWorker support before trying to install it
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js').then(() => {
    // Registration was successful
    console.log('ServiceWorker registration was successful');
  }).catch(() => {
    // Registration failed
  });
} else {
  // No ServiceWorker Support
}


// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

// Import components and reducers and middlewares
import App from './components/app';
import reducers from './reducers';
import logActions from './middlewares/log'

const createStoreWithMiddleware = applyMiddleware(
  logActions,
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
