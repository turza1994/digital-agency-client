import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const {_id, name, details, price, image} = service
    return (
        <div className="col-sm-4">
            <div className="service-card shadow p-4 fadeIn">
                <img className="" src={image} alt="Service" width="50"/>
                <h3>{name}</h3>
                <p className="lead">{details}</p>
                <p className="fw-bold lead"> price starts from {price}tk </p>
                <Link to={`/checkout/${_id}`}> <button className="btn btn-primary rounded-pill btn-gradient fw-bold">Book Now</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;