import './about.scss'
import Navbar from '../../components/navbar/navbar'

function About() {
    return (
        <div className="about">
            <Navbar></Navbar>
            <div className="about__container">
                <div className="about__container__title">عن الجامعيه , وماهيه عملها </div>
                <div>يجب اكمال محتواه الصفحه عن طريق الجامعيه التي ستستخدم التطبيق او الموقع </div>
            </div>
        </div>
    )
}

export default About
