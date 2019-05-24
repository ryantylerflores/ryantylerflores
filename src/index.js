import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './components/App';
import Header from './components/Header/Header';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers()
);

ReactDOM.render(
  <Provider store={store}>
    {/* <Header /> */}
    <App />
  </Provider>, document.getElementById('root'));

