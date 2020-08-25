import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducers = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
});

// our custom middleware
const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware] Dispatching", action);
            const result = next(action);
            console.log("[Middleware] next", store.getState());
            return result;
        };   
    };
};

const store = createStore(rootReducers, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
