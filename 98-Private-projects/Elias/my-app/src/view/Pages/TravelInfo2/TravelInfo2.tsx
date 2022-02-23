import React from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useLocation, useNavigate } from 'react-router-dom';

//transport
import Plane from '../../../icons/Property 1=OFF Plane+icon.png'
import Bus from '../../../icons/Property 1=OFF Bus+icon.png'
import Car from '../../../icons/Property 1=OFF Car+icon.png'
import Ship from '../../../icons/Property 1=OFF Ship+icon.png'
import Metro from '../../../icons/Property 1=OFF Taxi+icon.png'
import Taxi from '../../../icons/Property 1=OFF Taxi+icon.png'

//activity
import Glof from '../../../icons/Property 1=OFF Golf+icon.png'
import Club from '../../../icons/Property 1=OFF Club+icon.png'
import Photography from '../../../icons/Property 1=OFF Photography+icon.png'
import Swimming from '../../../icons/Property 1=OFF Swimming+icon.png'
import Hiking from '../../../icons/Property 1=OFF Hiking+icon.png'
import Biking from '../../../icons/Property 1=OFF Biking+icon.png'

//accommodation
import Hotel from '../../../icons/Property 1=OFF Hotel+icon.png'
import BNB from '../../../icons/Property 1=OFF BB+icon.png'
import ShortTerm from '../../../icons/Property 1=OFF Shorterm+icon.png'
import Van from '../../../icons/Property 1=OFF Van+icon.png'
import Tent from '../../../icons/Property 1=OFF Tent+icon.png'
import Sofa from '../../../icons/Property 1=OFF Sofa+icon.png'

//Spicial

import Baby from '../../../icons/Property 1=OFF Baby+icon.png'
import Toddlers from '../../../icons/Property 1=OFF Toddlers+icon.png'
import Pets from '../../../icons/Property 1=OFF Pets+icon.png'
import Med from '../../../icons/Property 1=OFF Med+icon.png'
import Merchandise from '../../../icons/Property 1=OFF Merchandise+icon.png'
import Valuable from '../../../icons/Property 1=OFF Valuable+icon.png'

import './TravelInfo2.scss';


const TravelInfo2 = () => {

  const nav = useNavigate();
  const { state }: any = useLocation();

function onSubmit(e:any){
  nav('/ViewList', {
    state: state
});
}

  return (
    <div className="wrapper">

            <div className="header"> Fill travel info</div>
            <form action="" className="TarvelInfo1Form">
                <div className="catg box1">
                <div className=" text Transport">Transport</div>
                <div className="grid-container">
                    <div className="grid-item"><img src={Plane} alt="" /></div>
                    <div className="grid-item"><img src={Bus} alt="" /></div>
                    <div className="grid-item"><img src={Car} alt="" /></div>
                    <div className="grid-item"><img src={Ship  } alt="" /></div>
                    <div className="grid-item"><img src={Metro } alt="" /></div>
                    <div className="grid-item"><img src={Taxi } alt="" /></div>
                </div>
                </div>
                <div className="catg box2">
                <div className=" text Activity">Activity</div>
                <div className="grid-container">
                    <div className="grid-item"><img src={Glof} alt="" /></div>
                    <div className="grid-item"><img src={Club} alt="" /></div>
                    <div className="grid-item"><img src={Photography} alt="" /></div>
                    <div className="grid-item"><img src={Swimming  } alt="" /></div>
                    <div className="grid-item"><img src={Hiking } alt="" /></div>
                    <div className="grid-item"><img src={Biking } alt="" /></div>
                </div>
                </div>
                <div className="catg box3">
                <div className=" text Accommodation">Accommodation</div>

                <div className="grid-container">
                    <div className="grid-item"><img src={Hotel} alt="" /></div>
                    <div className="grid-item"><img src={BNB} alt="" /></div>
                    <div className="grid-item"><img src={ShortTerm } alt="" /></div>
                    <div className="grid-item"><img src={Van   } alt="" /></div>
                    <div className="grid-item"><img src={Tent  } alt="" /></div>
                    <div className="grid-item"><img src={Sofa  } alt="" /></div>
                </div>
                </div>
                <div className="catg box4">
                <div className=" text Special">Special Care</div>
                <div className="grid-container">
                    <div className="grid-item"><img src={Baby } alt="" /></div>
                    <div className="grid-item"><img src={Toddlers } alt="" /></div>
                    <div className="grid-item"><img src={Pets } alt="" /></div>
                    <div className="grid-item"><img src={Med } alt="" /></div>
                    <div className="grid-item"><img src={Merchandise } alt="" /></div>
                    <div className="grid-item"><img src={Valuable } alt="" /></div>
                </div>
                </div>
          
         
                <button className='Proceedbtn' onClick={onSubmit}>Submit</button>
            </form>

        </div>
  )
}

export default TravelInfo2;