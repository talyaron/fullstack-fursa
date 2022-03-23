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
  console.log(accident_)
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
          <h3>معلومات الحدث</h3>
          <p>صنف الحدث: {accident_.value.type}</p>
          <p>توقيت الحدث : {accident_.value.date}</p>
          <p>عنوان الحدث : {accident_.value.address}</p>
          <p>وصف الحدث: {accident_.value.description}</p>
        </div>
        <Link to={`/${accidentId.accidentId}/profileInfo`}>
          <button>المعلومات الشخصيه</button>
        </Link>
        {/* <Link to={}> */}
        <button>الدردشه</button>
        {/* </Link> */}
        <Link to="/messagesBetweenOrg">
          <button>ارسال لمستخدم اخر</button>
        </Link>
      </div>
      <PhoneIcon sx={{ paddingLeft: '40px', fontSize: 35 }} />
    </div>
  )
}

export default AccidentsInfo
