import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TripPlanner = () => {
    return (
        <section className="  py-5">
            <div className="container">
                <div className="row row align-items-center">
                    <div className="col-lg-5">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/Yf3bwTV/photo-1605972643561-8bac9eec3ddc-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/zPkpvPh/photo-1597092030241-e634b9cf3f48-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/QcHw688/photo-1540018177157-957400dbd08a-ixlib-rb-1-2.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-lg-6">
                        <p>Trip Planner : <small> <i>Asia </i> /  Bangladesh</small></p>
                        <h1 className="mt-3">Bangladesh</h1>
                        <p className="lead text-secondary my-5">Some of Asia's longest rivers run through Bangladesh, forming the world's largest and most fertile delta. In addition to the Ganges, sacred to Hindus, hundreds of other waterways rank among the top tourist attractions in Bangladesh, offering access to lengthy beaches, islands, coral reefs, and the biggest mangrove forest in the world.</p>
                        <Link to='/'>
                            <button className='btn btn-success'>Start Planing</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TripPlanner;