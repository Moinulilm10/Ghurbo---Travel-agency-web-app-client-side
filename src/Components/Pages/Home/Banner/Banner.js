import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">

                    <div className="col-md-6 main-banner">
                        <h1 className="title">
                            Enjoy the tour with
                            <br /> ghurbo
                        </h1>
                        <p className="text-center mt-3 paragraph">
                            We provide travelers with an authentic Jordanian experience that they
                            can remember for the rest of their lives
                        </p>
                    </div>
                    {/* <div className="col-md-6 banner-pic img-fluid">
                        <img src={ } alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;