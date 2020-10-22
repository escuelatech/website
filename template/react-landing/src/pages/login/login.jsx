import React from 'react';
import GoogleBtn from '../../components/googleBtn';
import FacebookBtn from '../../components/facebookBtn';

import './login.css';

const Login = () => {
    return (
        <div className='login-page'>
            <div className='google-login'>
                <GoogleBtn />
            </div>
            <div className='facebook-login'>
                <FacebookBtn />
            </div>
        </div>
    )
}

export default Login;

