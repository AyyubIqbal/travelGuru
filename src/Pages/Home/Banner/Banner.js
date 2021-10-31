import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className="hero-banner bg-light py-5">
            <div className="container">
                <div className="row row align-items-center">
                    <div className="col-lg-5 offset-lg-1 order-lg-1">
                        <img src="https://i.ibb.co/gSLJtYP/photo-1623153023911-a10bf28f5a0a-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className='fs-1 my-4'>Visit <span className='fw-bold text-success'>Bangladesh</span></h1>
                        <p className="lead text-secondary my-5">Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger.</p>
                        {/* <a href="#" className="btn btn-outline-secondary btn-lg border">Order Now</a> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;