import App from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleWare } from './middleware';

const defaultState = {
  appName: 'conduit',
  articles: null
};

const reducer = function(state = defaultState, action) {
  return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleWare));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('main'));
