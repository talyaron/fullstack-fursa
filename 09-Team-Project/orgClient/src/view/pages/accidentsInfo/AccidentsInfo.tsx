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
  // const accident_ = { type: 'homeviolence', emergency: false, date: new Date(), address: 'Nazareth', call: {}, description: "", userInfo: { name: 'xxxxxx' }, org: {} }


  // let day = accident_.value.date.getDate();
  // let month = accident_.value.date.getMonth() + 1;
  // let year = accident_.value.date.getFullYear();

  // let fullDate = `${day}/${month}/${year}`;

  useEffect(() => {
    console.log('accidentInfo')
    dispatch(findAccidentAsync(accidentId))
  }, []);


  return (
    <div className='wrapper'>
      {/* <div className='menu'>
        <HomeIcon sx={{ paddingLeft: '20px', fontSize: 35, paddingTop: '10px' }} onClick={()=> nav('/accidents')}/>
        <SettingsIcon sx={{ float: 'right', fontSize: 35, paddingRight: '20px', paddingTop: '10px' }} />
      </div> */}
      <MenuAppBar />
      <div className="content">
        <div className="accidentInfo">
          <p>{accident_.value.type}</p>
          {/* <p>{fullDate}</p> */}
          <p>{accident_.value.user.name}</p>
          <p>{accident_.value.description}</p>
        </div>
        {/* <Link to={}> */}
        <button>Profile Info</button>
        {/* </Link> */}
        {/* <Link to={}> */}
        <button>Chat</button>
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
