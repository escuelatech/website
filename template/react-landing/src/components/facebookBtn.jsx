import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Signin from '../services/authService';
import './loginCpntCSS.css';

const APP_ID = '803819703724521';

class FacebookBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogined: false,
        };

    }

    login = (response) => {
        if (response.accessToken) {
            this.setState(state => ({
                isLogined: true,
                accessToken: response.accessToken
            }));
            const uesrData = {
                email: response.email,
                accessToken: response.accessToken,
                autheticatedMedium: 'Facebook',
                password: ''
            }
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
        console.log('facebook login error: ', response)
    }

    handleLogoutFailure = (response) => {
    }

    render() {
        return (
            <div className="facebook-btn">
                <FacebookLogin buttonStyle={{ padding: "6px" }}
                    appId={APP_ID}
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.login}
                    onFailure={this.handleLoginFailure}
                    icon="fa-facebook"
                    render={renderProps => (
                        <button onClick={renderProps.onClick}>Login with Facebook</button>
                    )} />
            </div>
        )
    }
}

export default FacebookBtn  