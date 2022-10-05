import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducer';
import {fetchTopStories} from './operations';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

store.dispatch(fetchTopStories())
