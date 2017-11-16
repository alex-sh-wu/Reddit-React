/*
    ./client/index.js
    which is the webpack entry file
*/

import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducers);

//store.subscribe(() => {console.log(store.getState())});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
