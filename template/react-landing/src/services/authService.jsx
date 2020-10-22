import axios from "axios";

const Signin = async(userData) => {
    let res = await axios.post('http://escuelatech.com/api/user/authenticate', {
        email: userData.email,
        autheticatedMedium: userData.autheticatedMedium? userData.autheticatedMedium: 'normal',
        password: userData.password? userData.password: '',
        access_token : userData.accesstoken
    })
    console.log('login response: ', res);
    return await res
}

export default Signin;