import React from 'react'
import GmailSignUp from '../../components/gmailSignUp/GmailSignUp'
import Logoimg from '../../components/image/Image'
import Back from '../../components/Back/BackButton'
import { Link } from 'react-router-dom';

function Gmail() {
  return (
    <div className="App">
      <div className="App-div">
        <Link className="linkStyle" to="/">
          <Back />
        </Link>

        <div className="AppTitle"> GymFit </div>
        <div className="subTitle"> Make the perfect body</div>
        <Logoimg />
        <GmailSignUp />
      </div>
    </div>
  );
}

export default Gmail
