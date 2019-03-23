import { connect } from 'react-redux';

import PhoneListContainer from '../components/PhoneListContainer';
import { setPhones, showSpinner } from '../actions/actions';

const mapStateToProps =  state => {
    return {
        phones: state.phones,
        spinnerVisibility: state.spinnerVisibility
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPhones: phones => {
            dispatch(setPhones(phones));
        },
        showSpinner: (bool) => {
            dispatch(showSpinner(bool));
        }
    }
}

const PhoneListCatalogContainer= connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneListContainer);

export default PhoneListCatalogContainer;