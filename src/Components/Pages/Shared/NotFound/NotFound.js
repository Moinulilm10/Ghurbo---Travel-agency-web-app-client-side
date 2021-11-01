import React from 'react';
import './NotFound.css'
import notFoundPic from '../../../../img/not-found-pic/not-found-img.png'

const NotFound = () => {
    return (
        <div className="img-fluid">
            <img src={notFoundPic} alt="" />
        </div>
    );
};

export default NotFound;