import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import phonesCatalogApp from './../reducers/reducers';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const store = createStore(
    phonesCatalogApp,
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
});

export default store;
