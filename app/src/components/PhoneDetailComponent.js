import React from 'react';
import Proptypes from 'prop-types';

const PhoneDetailComponent = ({phone}) => {
    return (
        <article className="container">
            <header className="container__header">
                <h1>Information</h1>
            </header>
            <div className="phone__information">
                <div className="phone__information-image">
                    <img src={phone.picture_url} alt={phone.name} />
                </div>
                <div className="phone__information-info">
                    <h2 className="phone__information-name">{phone.name}</h2>
                    <p className="phone__information-brand">{phone.brand}</p>
                    <p className="phone__information-description">{phone.description}</p>
                    <p className="phone__information-price">{phone.price} $</p>
                    <p className="phone__information-color">{phone.color.map(color => {
                        return <div key={`${phone.id}${color}`} className={"phone-color " + color}></div>
                    })}</p>
                </div>
            </div>
            
        </article>
    )
}

PhoneDetailComponent.prototype = {
    phone: Proptypes.object
}

export default PhoneDetailComponent;