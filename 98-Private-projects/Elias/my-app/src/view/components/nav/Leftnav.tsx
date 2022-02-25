import React from 'react'
import ETIcon from '../../../icons/Group 143.png';
import './Leftnav.scss';

interface openClose {
  Open: any;
}

const Leftnav = (props: openClose) => {
  const { Open } = props
  console.log(Open);
  if (Open)
    return (
      <ul className='Opned'>
        <li><img src={ETIcon} alt="" /></li>
        <li>profile pic</li>
        <li>Edit Profile</li>
        <li>Settings</li>
        <li>Sign Out</li>
        <li>Contact us</li>
        <li>About</li>
        <li>Rate the app</li>
      </ul>
    )
  else
    return (
      <ul className='Closed'>
        <li><img src={ETIcon} alt="" /></li>
        <li>profile pic</li>
        <li>Edit Profile</li>
        <li>Settings</li>
        <li>Sign Out</li>
        <li>Contact us</li>
        <li>About</li>
        <li>Rate the app</li>
      </ul>
    )

}

export default Leftnav;