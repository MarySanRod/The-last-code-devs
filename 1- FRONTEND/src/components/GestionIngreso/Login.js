import axios from 'axios';
import React from 'react';
import { GoogleLogin } from 'react-google-login';

export default class Login extends React.Component{
    responseGoogle = (googleResp)=>{
        console.log(googleResp);
        axios.post('http://localhost:5000/auth/google', {token: googleResp.tokenId})
            .then(resp => {
                console.log('Todo Bien, este es el token:', resp.data);
                sessionStorage.setItem('token', JSON.stringify(resp.data));
                window.location.href = './PaginaPrincipal';
            }
            )
            .catch(err => console.log('Hubo error', err))
    }
        render(){
        return(
            <div id="Google">
                <GoogleLogin className = 'GoogleLogin'
                    clientId="430836011138-lt77ca65jq3jvt7im3jq0d9jl1o960oh.apps.googleusercontent.com"
                    buttonText="Continuar con Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> 
            </div>
        )
    }
}