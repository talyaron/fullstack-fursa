import React from 'react'
import Avatar from '@mui/material/Avatar';
import Header from './Header'
import BottomNav from'./BottomNav'
import { useSelector } from "react-redux"
import { deepOrange } from '@mui/material/colors';
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
      <Header/>
      <br></br> 
      <BottomNav/>
      <Avatar sx={{ width: 100, height: 100 , bgcolor: deepOrange[500] }} alt={user.firstname} src="omarPic.jpg" /> <br></br>
      <div><b><span>Name : </span>{user.firstname}</b></div>
      <div><b><span>lastName : </span>{user.lastname}</b></div>
      <div><b><span>Email : </span>{user.email}</b></div>
      <div><b><span>Gender : </span>{gender}</b></div>
      <div><b><span>Main Goal : </span>{MainGoal}</b></div>
      <div><b><span>Activity : </span>{Activity}</b></div>
      <div><b><span>Age : </span>{Age.age}</b></div>
      <div><b><span>Height : </span>{Height.height}</b></div>
      <div><b><span>Weight : </span>{Weight.weight}</b></div>

    </div>
  )
}

export default Profile
