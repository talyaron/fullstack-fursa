import React from 'react'
import { Link } from 'react-router-dom';
import Btn from './Btn'
// import Avatar from '@mui/material/Avatar';
import Header from './Header'
import BottomNav from'./BottomNav'
// import Menu from './Menu'
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import HeightIcon from '@mui/icons-material/Height';
import NumbersIcon from '@mui/icons-material/Numbers';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FlagIcon from '@mui/icons-material/Flag';
import WcIcon from '@mui/icons-material/Wc';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import { useSelector } from "react-redux"
// import { deepOrange } from '@mui/material/colors';
import {selectUser,selectGender,selectMainGoal,selectActivity,selectAge,selectHeight,selectWeight} from "../../slice/selectors"
function Profile() {

  const user = useSelector(selectUser);
  const gender = useSelector(selectGender);
  const MainGoal = useSelector(selectMainGoal);
  const Activity = useSelector(selectActivity);
  const Age = useSelector(selectAge);
  const Height = useSelector(selectHeight);
  const Weight = useSelector(selectWeight);

  return (
    <div className="Middle">
      {/* <Menu/> */}
      <Header/>
      <br></br> 
      <BottomNav/>
      {/* <Avatar sx={{ width: 100, height: 100 , bgcolor: deepOrange[500] }} alt={user.firstname} src="omarPic.jpg" /> <br></br> */}
      <div className="grid-container">
        <div className="grid-item">
          <BadgeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="grid-item"><b>Name :</b> {user.firstname} {user.lastname} </div>
        <div className="grid-item">
        <Link className="linkStyle" to="/profile">
          <Btn title={"Edit"} />
          </Link>
        </div>
        <div className="grid-item">
          <EmailIcon style={{ fontSize: 50 }} />
        </div>
        <div className="grid-item"><b>Email :</b> {user.email}  </div>
        <div className="grid-item">
        <Link className="linkStyle" to="/profile">
          <Btn title={"Edit"} />
          </Link>
        </div>
        <div className="grid-item">
          <WcIcon style={{ fontSize: 50 }} />
        </div>
        <div className="grid-item"><b>Gender : </b>{gender} </div>
        <div className="grid-item">
        <Link className="linkStyle" to="/profile">
          <Btn title={"Edit"} />
          </Link>
        </div>
        <div className="grid-item">
          <FlagIcon style={{ fontSize: 50 }} />
        </div>
        <div className="grid-item"><b>Main goal :</b> {MainGoal} </div>
        <div className="grid-item">
        <Link className="linkStyle" to="/profile">
          <Btn title={"Edit"} />
          </Link>
        </div>
        <div className="grid-item">
          <AccessibilityNewIcon style={{ fontSize: 50 }} />
        </div>
        <div className="grid-item"><b>Activity :</b>  {Activity} </div>
        <div className="grid-item">
        <Link className="linkStyle" to="/profile">
          <Btn title={"Edit"} />
          </Link>
        </div>
        <div className="grid-item">
          <NumbersIcon style={{ fontSize: 50 }} />
        </div>
        <div className="grid-item"><b>Age : </b>{Age.age} </div>
        <div className="grid-item">
        <Link className="linkStyle" to="/profile">
          <Btn title={"Edit"} />
          </Link>
        </div>
        <div className="grid-item">
          <HeightIcon style={{ fontSize: 50 }} />
        </div>
        <div className="grid-item"><b>Height : </b>{Height.height} </div>
        <div className="grid-item">
        <Link className="linkStyle" to="/profile">
          <Btn title={"Edit"} />
          </Link>
        </div>
        <div className="grid-item">
          <MonitorWeightIcon style={{ fontSize: 50 }} />
        </div>
        <div className="grid-item"><b>Weight : </b>{Weight.weight} </div>
        <div className="grid-item">
        <Link className="linkStyle" to="/profile">
          <Btn title={"Edit"} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
