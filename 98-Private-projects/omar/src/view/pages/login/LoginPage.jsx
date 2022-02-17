import React from 'react'
import Logoimg from '../../components/image/Image'
import Back from '../../components/Back/BackButton'
import { Link } from 'react-router-dom';
import Login1 from '../../components/login/LoginComp'
import FirstTemplate from '../../components/firstTemplate/FirstTemplate'
function Login() {
  return (
    <div>
    <FirstTemplate />
      <Login1 />
  </div>
);
}


export default Login
