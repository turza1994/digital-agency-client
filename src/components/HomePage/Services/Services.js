import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import '../../../App.css'

const Services = () => {

    const [serviceList, setServiceList] = useState([]);

    useEffect(()=>{
        fetch("https://digital-agency-1994.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServiceList(data))
    },
    [serviceList])

    return (
        <div className="services text-center my-5 py-5">
            <h4 className="header-primary">Our Services</h4>
            <h2 className="display-5 header-secondary">We help Brands with</h2>
            <div className="container mt-5 mb-5">
                <div className="row">
                    {
                        serviceList.map(sl => <ServiceCard key={sl._id} service={sl} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;