import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import reducers from './reducers'

import App from './App';

const store = configureStore({reducer: reducers}, compose(applyMiddleware(thunk)));

//ReactDOM.render(<App />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);