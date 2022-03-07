import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LoginIcon from '@mui/icons-material/Login';
const SignUp = () => {
  return (
      <div className="SignUp">
        <Link to="/Gmail">
          <button className="GmailSignUp">
            <GoogleIcon className="Icon" /> Sign up with gmail
          </button>
        </Link>
        <Link to="/facebook">
          <button className="FacebookSignUp">
            <FacebookIcon className="Icon" /> Sign up with facebook
          </button>
        </Link>
        <Link to="/newAccount">
        <button className="Acoount">
          <LoginIcon className="Icon" />
          Sign Up with Email
        </button>
        </Link>
      </div>
  );
}

export default SignUp
