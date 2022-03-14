import React from 'react'

import './style.css'

import logoImg from '../../assets/images/icon.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/SignUp.svg'
import logIn from '../../assets/images/icons/login-ico.png'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import { Link } from 'react-router-dom'

export function Landing() {

    return (

        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">

                    <img src={logoImg} alt='onTime'></img>
                    <h2>Arrange Your Daily Tasks Brilliant</h2>
                </div>

                <img
                    src={landingImg}
                    alt="on Time" className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/main/signUp/" className="study">
                        <img src={studyIcon} alt='SignUp' />
                        Sign Up
                    </Link>
                    <Link to="/main/signin" className="give-classes">
                        <img src={logIn} alt='Estudar' />
                        log in
                    </Link>
                </div>
             <span className="total-connections">
                 perfect schedulieng make great results <img src={purpleHeartIcon} alt=''></img>
             </span>
            </div>

        </div>
    )
}