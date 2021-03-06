import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './ShowDetails.css'

const ShowDetails = () => {



    let { serviceId } = useParams()


    const [showDetails, setShowDetails] = useState({});


    useEffect(() => {
        fetch(`https://quiet-hamlet-58430.herokuapp.com/services/${serviceId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setShowDetails(data)
            });
    }, []);


    // const singleService = showDetails.filter(service => service._id == serviceId);

    // console.log(singleService)


    return (
        <div>
            <h2>This is detail {serviceId}</h2>
            {/* <div className="container-fluid  mb-1">
                <h1 className="heading mb-5 mt-5">
                    <span className="text-dark fw-bold mt-5"> {singleService[0]?.name} </span>
                </h1>
                <Row xs={1} md={2} className="g-3 ">
                    <div className="container-fluid">

                        <div className="container" >
                            <Col>
                                <Card className=" mb-5">
                                    <Card.Img variant="top" src={singleService[0]?.img} />
                                    <Card.Body>
                                        <Card.Title>{singleService[0]?.name}</Card.Title>
                                        <Card.Text>
                                            <p>
                                                About Service: <small className="pb-3 text-start"> {singleService[0]?.description}</small>
                                            </p>
                                            <p>
                                                {singleService[0]?.description}
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to="/services">
                                            <button className="btn btn-outline-primary px-5 border-2 rounded-4 fw-bold ">Book Another Destination</button>
                                        </Link>
                                        <Link to="/appointment">
                                            <button className="btn btn-outline-primary ms-3 px-5 border-2 rounded-4 fw-bold ">Confirm Booking</button>
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </Row>
            </div> */}
        </div>
    );
};

export default ShowDetails;