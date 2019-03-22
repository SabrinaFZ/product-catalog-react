import { connect } from 'react-redux';

import PhoneListContainer from '../components/PhoneListContainer';
import { setPhones } from '../actions/actions';

const mapStateToProps =  state => {
    return {
        phones: state.phones
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPhones: phones => {
            dispatch(setPhones(phones));
        }
    }
}

const PhoneListCatalogContainer= connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneListContainer);

export default PhoneListCatalogContainer;