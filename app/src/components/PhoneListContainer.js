import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PhoneListContainer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get('http://localhost:3000/phones').then(response => {
            if(response.status === 200){
                this.props.setPhones(response.data.results);
            }
        }).catch(err => {
            console.log(err);
        }); 
    }

    render(){
        const { phones } = this.props;

        return (
            <section className="container">
                <header className="container__header">
                    <h1>Catalog</h1>
                </header>
                <ul className="container__list">
                    {
                        phones.map(phone => {
                            return (
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/phone/${phone.id}`} key={phone.id}>
                                    <li className="container__list__item">
                                        <img className="item__picture" src={`${phone.picture_url}`} alt={`${phone.title}`} />
                                        <p className="item__name">{phone.name}</p>
                                    </li>
                                </Link>
                            );
                        })
                    }
                </ul>
            </section>
        )
    }
}

PhoneListContainer.propTypes = {
    phones: PropTypes.arrayOf(PropTypes.object),
    setPhones: PropTypes.func
};

export default PhoneListContainer;