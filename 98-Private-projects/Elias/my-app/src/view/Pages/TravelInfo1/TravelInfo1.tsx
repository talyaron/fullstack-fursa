import './TravelInfo1.scss';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useLocation, useNavigate } from 'react-router-dom';
import { changeNavText } from '../../../app/reducer/NavTextReducer';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useEffect } from 'react';
import InputComp from '../../components/InputComp/InputComp';
import SingupF from '../../components/SignupF/SingupF';



interface list {
    propsname: string;

}

const TravelInfo1 = () => {
    const TravelPList: Array<list> = [{ propsname: "leisure" }, { propsname: "business" }, { propsname: "roadTrip" }, { propsname: "family" }, { propsname: "study" }, { propsname: "grieving" }];
    const LuggagePList: Array<list> = [{ propsname: "trolly" }, { propsname: "suitcase" }, { propsname: "briefcase" }, { propsname: "backpack" }, { propsname: "handbag" }, { propsname: "multy" }];
   



    const nav = useNavigate();
    const { state }: any = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(changeNavText("Fill travel info"));
    }, [dispatch]);

    function clickProceed(e: any) {
        nav('/TravelInfo2', {
            state: state
        });
    }
    //const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 20);


    return (
        <div className="wrapper">

            <div className="header"> Fill travel info</div>
            <form action="" className="TarvelInfo1Form">
                <SingupF/>
                <div className=" text whereHeader">Where</div>
                <input type="text" placeholder='Type here' className='whereInput' />
                <div className="text whenHeader">When</div>
                <CalendarComponent id="calendar" isMultiSelection={true}></CalendarComponent>
                <div className=" text HowMany">Whow many People</div>
                <input type="text" placeholder='Type here' className='HowManyInput' />
                <div className=" text TravelP">Travel Purpose</div>
                <div className="grid-container">

                    {TravelPList.map((element, index) => {
                        return (
                            <InputComp key={index} propsname={element.propsname} />
                        );
                    })
                    }

                </div>
                <div className="text ChooseL">Choose Luggage</div>
                <div className="grid-container">
                    {LuggagePList.map((element, index) => {
                        return (
                            <InputComp key={index} propsname={element.propsname} />
                        );
                    })
                    }
                </div>
                <button className='Proceedbtn' onClick={clickProceed}>Proceed</button>
            </form>

        </div>
    )
}
export default TravelInfo1;


