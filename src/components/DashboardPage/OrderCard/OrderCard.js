import React from 'react';
import '../../../App.css'

const OrderCard = ({order}) => {
    const {name, image, details, status, orderDate} = order
    return (
        <div className="col-sm-6">
            <div className="rounded shadow w-75 p-3">
                <div className="d-flex flex-wrap align-items-center">
                    <img src={image} alt="" width="50" />
                    <button className="btn btn-primary ms-auto">{status}</button>
                </div>
                <br/>
                <h4 className="header-primary">{name}</h4>
                <p className="lead text-secondary">{details}</p>
            </div>
        </div>
    );
};

export default OrderCard;