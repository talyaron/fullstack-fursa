import React, { useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneIcon from '@mui/icons-material/Phone';
import './AccidentsInfo.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { accident, findAccidentAsync, removeSelected } from '../../../app/reducer/accidentInfoReducer';
import { Link } from 'react-router-dom';
import MenuAppBar from '../../Components/header/appBar';

function AccidentsInfo() {
  const accidentId = useParams();
  const dispatch = useAppDispatch();
  const accident_ = useAppSelector(state => state.accident);
  const nav = useNavigate();

  useEffect(() => {
    console.log('accidentInfo')
    dispatch(findAccidentAsync(accidentId))
  }, []);

  return (
    <div className='wrapper'>
      <MenuAppBar />
      <div className="content">
        <div className="accidentInfo">
          <h3>Accident Info</h3>
          <p>Accident Type : {accident_.value.type}</p>
          <p>Date : {accident_.value.date}</p>
          <p>Address : {accident_.value.address}</p>
          <p>Description: {accident_.value.description}</p>
        </div>
        <Link to={'/profileInfo'}>
        <button>Profile Info</button>
        </Link>
        {/* <Link to={}> */}
        <button>Go To Chat</button>
        {/* </Link> */}
        <Link to="/messagesBetweenOrg">
          <button>Send to other user</button>
        </Link>
      </div>
      <PhoneIcon sx={{ paddingLeft: '40px', fontSize: 35 }} />
    </div>
  )
}

export default AccidentsInfo
