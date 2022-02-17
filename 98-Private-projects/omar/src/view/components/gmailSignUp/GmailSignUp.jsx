import React from "react";
import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './GmailSignUp.scss'

const clientId = "470899322541-c7581e4uc3cji4o6qvn44kcd8f3sijld.apps.googleusercontent.com";
function GmailSignUp() {
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div className="loginbutton">
            { showloginButton ?
                <GoogleLogin
                
                    clientId={clientId}
                    buttonText ="Sign In with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}


export default GmailSignUp;
