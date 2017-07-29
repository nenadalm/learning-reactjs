import {createStore} from 'redux';
import {reducer} from './core';
import {Map} from 'immutable';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './view.jsx';

const store = createStore(reducer, Map());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
