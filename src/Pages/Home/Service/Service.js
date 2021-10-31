import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, img, name, description } = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 mb-3">
            <div className="card-group">
                <div className="card">
                    <img src={img} width="50%" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            {description.slice(0, 100)}
                        </p>
                        <Link to={`/placeorder/${_id}`}>
                            <button className='btn btn-success'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;