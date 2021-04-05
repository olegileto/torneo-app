import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga'
import App from './containers/App/App';
import { rootReducer } from './reducers/index';
import sagas from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const appElement = document.getElementById('app');

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    appElement
)
