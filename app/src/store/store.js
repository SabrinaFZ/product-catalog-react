import { createStore, applyMiddleware } from 'redux';
import phonesCatalogApp from './../reducers/reducers';

const store = createStore(
    phonesCatalogApp,
    applyMiddleware(logger)
);

export default store;
