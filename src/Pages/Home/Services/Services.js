import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://bloodcurdling-blood-61270.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services);
    return (
        <div className='container'>
            <h1 className='fs-1 my-4 text-center'>OUR <span className='fw-bold text-success'>SERVICES</span></h1>
            <div className="row">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;