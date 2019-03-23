import { connect } from "react-redux";

import PhoneDetailComponent from './../components/PhoneDetailComponent';

const getPhone = (phones, idPhone) => {
    return phones.find((phone) => {
        return phone.id === idPhone;
    });
}

const mapStateToProps = (state, ownProps) => {
    return {
        phone: getPhone(state.phones, ownProps.match.params.id)
    }
}

const PhoneDetailContainer = connect(
    mapStateToProps
)(PhoneDetailComponent);

export default PhoneDetailContainer;
