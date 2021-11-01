import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://quiet-hamlet-58430.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false);
            })
    }, [])

    return (
        <div id="services">
            <h1 className="mt-5 fw-bolder fs-1">Your <span style={{ color: 'khaki' }}>Destination</span> </h1>

            {
                isLoading
                    ?
                    (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>

                    )
                    :

                    (

                        <div className="service-container">
                            {
                                services.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                        </div>
                    )
            }


        </div>
    );
};

export default Services;