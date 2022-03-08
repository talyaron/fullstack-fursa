import React, { useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneIcon from '@mui/icons-material/Phone';
import './AccidentsInfo.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { accident, findAccidentAsync } from '../../../app/reducer/accidentInfoReducer';
import { Link } from 'react-router-dom';

function AccidentsInfo() {
  const accidentId = useParams();
  const dispatch = useAppDispatch();
  const accident_ = useAppSelector(accident);

  useEffect(()=>{
    dispatch(findAccidentAsync(accidentId))
  }, []);

  
  return (
    <div className='wrapper'>
      <div className='menu'>
        <HomeIcon sx={{paddingLeft:'20px', fontSize: 35, paddingTop:'10px'}}/>
        <SettingsIcon sx={{float:'right' , fontSize:35, paddingRight:'20px', paddingTop:'10px'}}/>
      </div>
      <div className="content">
        <div className="accidentInfo">
          <p>{accident_.type}</p>
          <p>{accident_.date}</p>
          <p>{accident_.user.userInfo.name}</p>
          <p>{accident_.description}</p>
        </div>
        {/* <Link to={}> */}
          <button>Profile Info</button>
        {/* </Link> */}
        {/* <Link to={}> */}
          <button>Chat</button>
        {/* </Link> */}
        {/* <Link to={}> */}
          <button>Send to other user</button>
        {/* </Link> */}
      </div>
      <PhoneIcon sx={{paddingLeft:'40px', fontSize: 35}}/>
    </div>
  )
}

export default AccidentsInfo
