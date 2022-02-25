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

  function onSubmit(e: any) {
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


                    <input id="Plane" type="checkbox" name="apple" />
                    <label className="Plane" htmlFor="Plane"></label>

                    <input id="Bus" type="checkbox" />
                    <label className='Bus' htmlFor="Bus"></label>

                    <input id="Car" type="checkbox" name="apple" />
                    <label className="Car" htmlFor="Car"></label>

                    <input id="Ship" type="checkbox" />
                    <label className='Ship' htmlFor="Ship"></label>

                    <input id="Metro" type="checkbox" name="apple" />
                    <label className="Metro" htmlFor="Metro"></label>

                    <input id="Taxi" type="checkbox" />
                    <label className='Taxi' htmlFor="Taxi"></label>
                </div>
            </div>
            <div className="catg box2">
                <div className=" text Activity">Activity</div>
                <div className="grid-container">


                    <input id="Glof" type="checkbox" name="apple" />
                    <label className="Glof" htmlFor="Glof"></label>


                    <input id="Club" type="checkbox" />
                    <label className='Club' htmlFor="Club"></label>

                    <input id="Photography" type="checkbox" name="apple" />
                    <label className="Photography" htmlFor="Photography"></label>

                    <input id="Swimming" type="checkbox" />
                    <label className='Swimming' htmlFor="Swimming"></label>

                    <input id="Hiking" type="checkbox" name="apple" />
                    <label className="Hiking" htmlFor="Hiking"></label>

                    <input id="Biking" type="checkbox" />
                    <label className='Biking' htmlFor="Biking"></label>


                </div>
            </div>
            <div className="catg box3">
                <div className=" text Accommodation">Accommodation</div>
                <div className="grid-container">


                    <input id="Hotel" type="checkbox" name="apple" />
                    <label className="Hotel" htmlFor="Hotel"></label>


                    <input id="BNB" type="checkbox" />
                    <label className='BNB' htmlFor="BNB"></label>

                    <input id="ShortTerm" type="checkbox" name="apple" />
                    <label className="ShortTerm" htmlFor="ShortTerm"></label>

                    <input id="Van" type="checkbox" />
                    <label className='Van' htmlFor="Van"></label>

                    <input id="Tent" type="checkbox" name="apple" />
                    <label className="Tent" htmlFor="Tent"></label>

                    <input id="Sofa" type="checkbox" />
                    <label className='Sofa' htmlFor="Sofa"></label>


                </div>
            </div>
            <div className="catg box4">
                <div className=" text Special">Special Care</div>
                <div className="grid-container">



                    <input id="Baby" type="checkbox" name="apple" />
                    <label className="Baby" htmlFor="Baby"></label>


                    <input id="Toddlers" type="checkbox" />
                    <label className='Toddlers' htmlFor="Toddlers"></label>

                    <input id="Pets" type="checkbox" name="apple" />
                    <label className="Pets" htmlFor="Pets"></label>

                    <input id="Med" type="checkbox" />
                    <label className='Med' htmlFor="Med"></label>

                    <input id="Merchandise" type="checkbox" name="apple" />
                    <label className="Merchandise" htmlFor="Merchandise"></label>

                    <input id="Valuable" type="checkbox" />
                    <label className='Valuable' htmlFor="Valuable"></label>


                </div>
            </div>
            <button className='Proceedbtn'onClick={onSubmit} >Submit</button>

        </form>


    </div>
)
 
}

export default TravelInfo2;