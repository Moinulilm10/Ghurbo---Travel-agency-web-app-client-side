import React from 'react';
import './BestDestination.css'
import banner1 from '../../../../img/Banner/destination-1.jpg'
import banner2 from '../../../../img/Banner/destination-2.jpg'
import banner3 from '../../../../img/Banner/destination-3.jpg'
import { Card } from 'react-bootstrap';


const BestDestination = () => {
    return (
        <div className="mt-5">
            <div className="header-title mt-5">
                <h1>Best Destination</h1>
                <h4>All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</h4>
            </div>
            <div className="container mt-5 destination-section">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-around section-container">
                            <Card className="bg-dark text-white border-0" style={{ width: '25rem' }}>
                                <Card.Img src={banner1} alt="Card image" />
                                <Card.ImgOverlay className="overlay">
                                    <Card.Title>Switzerland</Card.Title>
                                    <Card.Text className="text">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text">Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card className="bg-dark text-white  border-0" style={{ width: '25rem' }}>
                                <Card.Img src={banner2} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Vins</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card className="bg-dark text-white border-0" style={{ width: '25rem' }}>
                                <Card.Img src={banner3} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Indonesia</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BestDestination;