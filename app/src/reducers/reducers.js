import {
    combineReducers
} from 'redux';

import { SET_PHONES, SHOW_SPINNER } from './../actions/actionTypes';

const phones = (state = [], action) => {
    switch(action.type){
        case SET_PHONES:
            return [...action.phones]
        default:
            return state;
    }
};

const spinnerVisibility = (state = true, action) => {
    switch(action.type){
        case SHOW_SPINNER: 
            return action.bool;
        default:
            return state;
    }
}

const phonesCatalogApp = combineReducers({
    phones,
    spinnerVisibility
});

export default phonesCatalogApp;