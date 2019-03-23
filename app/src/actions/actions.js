import { SET_PHONES, SHOW_SPINNER } from "./actionTypes";

const setPhones = (phones) =>{
    return {
        type: SET_PHONES,
        phones
    }
}

const showSpinner = (bool) => {
    return {
        type: SHOW_SPINNER,
        bool
    }
}

export {
    setPhones,
    showSpinner
}
