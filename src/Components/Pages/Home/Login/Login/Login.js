import React from 'react';
import './Login.css'
import loginPic from '../../../../../img/login/login.jpg'
import useAuth from '../../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/'
    console.log('came form', location.state?.from)

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <div>
            <div className="card mb-3" style={{ "max-width": "540px;" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={loginPic} alt="" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title fw-bolder mt-5">Sign With <span style={{ color: 'khaki' }}>Google here</span></h1>
                            <button onClick={handleGoogleLogin} className="btn btn-warning mt-3"> <i style={{ color: 'white', fontSize: '15px' }} className="fab fa-google"><span> Google sign in</span></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;