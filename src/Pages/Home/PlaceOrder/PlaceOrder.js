import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const { user } = useFirebase();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [service, setService] = useState({});
    const onSubmit = data => {
        fetch('https://bloodcurdling-blood-61270.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order precess successfully');
                    reset()
                }
            })
    };

    useEffect(() => {
        fetch(`https://bloodcurdling-blood-61270.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return (
        <section className=" bg-light py-5">
            <div className="container">
                <div className="row row align-items-center">
                    <div className="col-lg-5 offset-lg-1 order-lg-1">

                        {/* react-hook-form */}
                        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input type="date" {...register("price")} placeholder="Price" />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input type="submit" />
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <h3>Price: ${service.price}</h3>
                        <img src={service.img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaceOrder;