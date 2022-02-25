
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { changeNavText } from '../../../app/reducer/NavTextReducer';



import './TravelInfo2.scss';

interface list {
  propsname: string;

}
const TravelInfo2 = () => {

  const TransportList: Array<list> = [{ propsname: "Plane" }, { propsname: "Bus" }, { propsname: "Car" }, { propsname: "Ship" }, { propsname: "Metro" }, { propsname: "Taxi" }];
  const ActivityList: Array<list> = [{ propsname: "Glof" }, { propsname: "Club" }, { propsname: "Photography" }, { propsname: "Swimming" }, { propsname: "Hiking" }, { propsname: "Biking" }];
  const AccommodationList: Array<list> = [{ propsname: "Hotel" }, { propsname: "BNB" }, { propsname: "ShortTerm" }, { propsname: "Van" }, { propsname: "Tent" }, { propsname: "Sofa" }];
  const SpecialList: Array<list> = [{ propsname: "Baby" }, { propsname: "Toddlers" }, { propsname: "Pets" }, { propsname: "Med" }, { propsname: "Merchandise" }, { propsname: "Valuable" }];

  const nav = useNavigate();
  const { state }: any = useLocation();
  const dispatch = useAppDispatch();

        useEffect(() => {
          dispatch(changeNavText("Choose Categories"));
        }, [dispatch]);

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
            {TransportList.map((element, index) => {
              return (
                <InputComp key={index} propsname={element.propsname} />
              );
            })
            }
          </div>
        </div>
        <div className="catg box2">
          <div className=" text Activity">Activity</div>
          <div className="grid-container">
            {ActivityList.map((element, index) => {
              return (
                <InputComp key={index} propsname={element.propsname} />
              );
            })
            }

          </div>
        </div>
        <div className="catg box3">
          <div className=" text Accommodation">Accommodation</div>
          <div className="grid-container">
            {AccommodationList.map((element, index) => {
              return (
                <InputComp key={index} propsname={element.propsname} />
              );
            })
            }

          </div>
        </div>
        <div className="catg box4">
          <div className=" text Special">Special Care</div>
          <div className="grid-container">
            {SpecialList.map((element, index) => {
              return (
                <InputComp key={index} propsname={element.propsname} />
              );
            })
            }


          </div>
        </div>
        <button className='Proceedbtn' onClick={onSubmit} >Submit</button>

      </form>


    </div>
  )

}

function InputComp(props: list) {
  const { propsname } = props;
  return (
    <div>
      <input id={propsname} type="checkbox" />
      <label className={propsname} htmlFor={propsname}></label>
    </div>

  );
}

export default TravelInfo2;