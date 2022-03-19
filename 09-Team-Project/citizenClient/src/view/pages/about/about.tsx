import './about.scss'
import Navbar from '../../components/navbar/navbar'

function About() {
    return (
        <div className="about">
            <Navbar></Navbar>
            <div className="about__container">
                <div className="about__container__title">About Us</div>
            </div>
        </div>
    )
}

export default About
