import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import MessageComp from '../../Components/MessageComp/MessageComp';

const MessageSubMenu = () => {
    const accidentsReducer = useAppSelector(state => state.accidents);
    const dispatch = useAppDispatch();
    const nav = useNavigate();
  
    useEffect(() => {
      //dispatch(fetchAccidentsAsync())
    }, [])
  


  return (
    <div><div className="accidentsContent">
    {/* {accidentsReducer.status === 'loading' ? <div>Loading...</div> :
      accidentsReducer.value.accidents.map((accident, index) => {
        return (
          // <AccidentComp key={index} connect={"connect"} emergency={accident.emergency} details={accident.description} notifications={accident.address} />
          <MessageComp key={index} accident={accident} />

        );
      })
    } */}
  </div></div>
  )
}

export default MessageSubMenu