import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Signin from '../services/authService';
import './loginCpntCSS.css';
const CLIENT_ID = '54482114691-umjeg0c51e0lbih131fpcgrf4tfgrssq.apps.googleusercontent.com';
// const CLIENT_ID = '637498838357-r8sr9o20385bd2bbct5nd3qo6ngo6cbo.apps.googleusercontent.com';

class GoogleBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogined: false,
            accessToken: ''
        };

    }

    login = (response) => {
        if (response.accessToken) {
            console.log('google login res: ', response)
            const uesrData = {
                accessToken: response.accessToken,
                email: response.profileObj.email,
                autheticatedMedium: 'Google',
                password: ''
            };
            Signin(uesrData).then((res) => {
                this.setState(state => ({
                    isLogined: true
                }));
                console.log('signin suggess: ', res.data)
            }).catch((error) => {
                console.log('failed signin: ', error)
            });
        }
    }

    logout = (response) => {
        this.setState(state => ({
            isLogined: false,
            accessToken: ''
        }));
    }

    handleLoginFailure = (response) => {
        alert('Failed to log in')
    }

    handleLogoutFailure = (response) => {
        alert('Failed to log out')
    }

    render() {
        return (
            <div className='google-btn'>
                { this.state.isLogined ?
                    <GoogleLogout
                        clientId={CLIENT_ID}
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Log out</button>
                        )}
                        onLogoutSuccess={this.logout}
                        onFailure={this.handleLogoutFailure}
                    >
                    </GoogleLogout> : <GoogleLogin
                        clientId={CLIENT_ID}
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</button>
                        )}
                        onSuccess={this.login}
                        onFailure={this.handleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        responseType='code,token'
                    />
                }
                { this.state.accessToken ? <h5>Your Access Token: <br /><br /> {this.state.accessToken}</h5> : null}

            </div>
        )
    }
}

export default GoogleBtn;