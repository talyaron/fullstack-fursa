import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__first">
                    <div className="footer__content__title">DISCOVER</div>
                    <div className="footer__content__li">Private Dining</div>
                    <div className="footer__content__li">Restaurants Near Me</div>
                    <div className="footer__content__li">Reserve For Others</div>
                    <div className="footer__content__li">Delivery Near Me</div>
                    <div className="footer__content__li">Cuisines</div>
                    <div className="footer__content__li">Restaurants Open Now</div>
                </div>
                <div className="footer__content__second">
                    <div className="footer__content__title">APP NAME</div>
                    <div className="footer__content__li">About Us</div>
                    <div className="footer__content__li">Blog</div>
                    <div className="footer__content__li">Career</div>
                    <div className="footer__content__li">Help</div>
                </div>
                <div className="footer__content__third">
                    <div className="footer__content__title">CONTACT</div>
                    <div className="footer__content__li"><FontAwesomeIcon icon={faHouseChimney} /> Israel,Haifa 10012</div>
                    <div className="footer__content__li"><FontAwesomeIcon icon={faEnvelope} /> m.zmiro@hotmail.com</div>
                    <div className="footer__content__li"><FontAwesomeIcon icon={faPhone} /> +972 549 074 119</div>
                </div>
                <div className="footer__content__fourth">
                    <div className="footer__content__title">JOIN US</div>
                    <div className="footer__content__fourth__brands">
                        <div className="footer__content__fourth__icons">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="footer__content__fourth__icons">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="footer__content__fourth__icons">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className="footer__content__fourth__icons">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Footer;