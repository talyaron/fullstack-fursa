import './TravelInfo1.scss';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useLocation } from 'react-router-dom';


const TravelInfo1 = () => {

    const {state}:any = useLocation();

    function clickProceed(e:any){
        nav('/Signup', {
            state: state
        });
    }
    const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 20);


    return (
        <div className="wrapper">

            <div className="header"> Fill travel info</div>
            <form action="" className="TarvelInfo1Form">
                <div className="whereHeader">Where</div>
                <input type="text" placeholder='Type here' className='whereInput' />
                <div className="whenHeader">When</div>
                <CalendarComponent id="calendar" isMultiSelection={true}></CalendarComponent>
                <div className="HowMany">Whow many People</div>
                <input type="text" placeholder='Type here' className='HowManyInput' />
                <div className="TravelP">Travel Purpose</div>
                <div className="grid-container">
                    <div className="grid-item">1</div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">4</div>
                    <div className="grid-item">5</div>
                    <div className="grid-item">6</div>
                </div>
                <div className="ChooseL">Choose Luggage</div>
                <div className="grid-container">
                    <div className="grid-item">1</div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">4</div>
                    <div className="grid-item">5</div>
                    <div className="grid-item">6</div>
                </div>


                <button className='Proceedbtn' onClick={clickProceed}>Proceed</button>
            </form>
        </div>
    )
}

export default TravelInfo1;
function nav(arg0: string, arg1: { state: any; }) {
    throw new Error('Function not implemented.');
}

