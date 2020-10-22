import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import './loginCpntCSS.css';
// appId='657319568198782'
const CLIENT_ID = '637498838357-r8sr9o20385bd2bbct5nd3qo6ngo6cbo.apps.googleusercontent.com';

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
            this.setState(state => ({
                isLogined: true,
                accessToken: response.accessToken
            }));
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
                        className='login-btn'
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Log out</button>
                        )}
                        onLogoutSuccess={this.logout}
                        onFailure={this.handleLogoutFailure}
                    >
                    </GoogleLogout> : <GoogleLogin
                        clientId={CLIENT_ID}
                        className='login-btn'
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