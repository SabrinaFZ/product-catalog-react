import {
    combineReducers
} from 'redux';

import {
    SET_PHONES
} from './../actions/actionTypes.js';

const phones = (state = [], action) => {
    switch(action.type){
        case SET_PHONES:
            return [...action.phones]
    }
};

const phonesCatalogApp = combineReducers({
    phones
});

export default phonesCatalogApp;