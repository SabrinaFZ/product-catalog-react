import { SET_PHONES } from './actionTypes';

const setPhones = (phones) =>{
    return {
        type: SET_PHONES,
        phones
    }
}

export {
    setPhones
}
