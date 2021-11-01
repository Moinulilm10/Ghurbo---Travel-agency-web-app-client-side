import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, key, name, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="mb-2">{name}</h3>
            <p className="px-5">{description}</p>
            <Link to={`/placeorder/${_id}`}>
                <button className="btn btn-primary rounded-pill">Book Now</button>
            </Link>
        </div>
    );
};

export default Service;