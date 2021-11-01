import React from 'react';
import './Process.css'

const Process = () => {
    return (
        <div>
            <h1 className="fw-bolder mt-5">Destination <span style={{ color: 'khaki' }}>Process</span></h1>
            <div className="process mt-4">
                <div className="process-1">
                    <i class="fas fa-luggage-cart"></i>
                    <br />
                    <h4 className="fw-lighter text-white fw-bold">Book your destination</h4>
                    <br />
                    <p className="fw-lighter text-white">Wait for Confirmation</p>
                </div>
                <div className="process-2">
                    <i class="fas fa-route"></i>
                    <br />
                    <h4 className="fw-lighter text-white fw-bold">Manage Your Service</h4>
                    <br />
                    <p className="fw-lighter text-white">Wait For Travel Response</p>
                </div>
                <div className="process-3">
                    <i class="fas fa-bus"></i>
                    <br />
                    <h4 className="fw-lighter text-white fw-bold">Perform Process</h4>
                    <br />
                    <p className="fw-lighter text-white">Go Through with Process</p>
                </div>
            </div>
        </div>

    );
};

export default Process;