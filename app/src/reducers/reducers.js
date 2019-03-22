import {
    combineReducers
} from 'redux';

import { SET_PHONES } from './../actions/actionTypes';

const phones = (state = [], action) => {
    switch(action.type){
        case SET_PHONES:
            return [...action.phones]
        default:
            return state;
    }
};

const phonesCatalogApp = combineReducers({
    phones
});

export default phonesCatalogApp;