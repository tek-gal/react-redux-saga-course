import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './redux/rootReducer';
import { forbiddenWordsMiddleware } from './redux/middleware';
import { sagaWatcher } from './redux/sagas';


const saga = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      forbiddenWordsMiddleware,
      saga,
    )
  ),
);

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  app,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
