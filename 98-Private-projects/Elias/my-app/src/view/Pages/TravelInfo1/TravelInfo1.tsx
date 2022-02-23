import './TravelInfo1.scss';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useLocation, useNavigate } from 'react-router-dom';
import leisure from '../../../icons/Vector.png'
import business from '../../../icons/Vector-2.png'
import roadTrip from '../../../icons/Vector-4.png'
import family from '../../../icons/Vector-1.png'
import study from '../../../icons/Vector-5.png'
import grieving from '../../../icons/Vector-6.png'

import trolly from '../../../icons/Stroke.png'
import suitcase from '../../../icons/Vector-7.png'
import briefcase from '../../../icons/Vector-3.png'
import backpack from '../../../icons/Vector-8.png'
import handbag from '../../../icons/Vector-9.png'
import multy from '../../../icons/Vector-10.png'




const TravelInfo1 = () => {
    
    const nav = useNavigate();
    const { state }: any = useLocation();

    function clickProceed(e: any) {
        nav('/Signup', {
            state: state
        });
    }
    const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 20);


    return (
        <div className="wrapper">

            <div className="header"> Fill travel info</div>
            <form action="" className="TarvelInfo1Form">
                <div className=" text whereHeader">Where</div>
                <input type="text" placeholder='Type here' className='whereInput' />
                <div className="text whenHeader">When</div>
                <CalendarComponent id="calendar" isMultiSelection={true}></CalendarComponent>
                <div className=" text HowMany">Whow many People</div>
                <input type="text" placeholder='Type here' className='HowManyInput' />
                <div className=" text TravelP">Travel Purpose</div>
                <div className="grid-container">
                    <div className="grid-item"><img src={leisure} alt="" /></div>
                    <div className="grid-item"><img src={business} alt="" /></div>
                    <div className="grid-item"><img src={roadTrip} alt="" /></div>
                    <div className="grid-item"><img src={family  } alt="" /></div>
                    <div className="grid-item"><img src={study } alt="" /></div>
                    <div className="grid-item"><img src={grieving } alt="" /></div>
                </div>
                <div className="text ChooseL">Choose Luggage</div>
                <div className="grid-container">
                    <div className="grid-item"><img src={trolly } alt="" /></div>
                    <div className="grid-item"><img src={suitcase } alt="" /></div>
                    <div className="grid-item"><img src={briefcase } alt="" /></div>
                    <div className="grid-item"><img src={backpack } alt="" /></div>
                    <div className="grid-item"><img src={handbag } alt="" /></div>
                    <div className="grid-item"><img src={multy} alt="" /></div>
                </div>
                <button className='Proceedbtn' onClick={clickProceed}>Proceed</button>
            </form>

        </div>
    )
}

export default TravelInfo1;


