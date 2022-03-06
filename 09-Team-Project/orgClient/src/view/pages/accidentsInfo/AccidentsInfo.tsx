import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneIcon from '@mui/icons-material/Phone';
import './AccidentsInfo.scss';

function AccidentsInfo() {
  return (
    <div className='wrapper'>
      <div className='menu'>
        <HomeIcon sx={{paddingLeft:'20px', fontSize: 35, paddingTop:'10px'}}/>
        <SettingsIcon sx={{float:'right' , fontSize:35, paddingRight:'20px', paddingTop:'10px'}}/>
      </div>
      <div className="content">
        <div className="accidentInfo">
          <p>Accident Info</p>
        </div>
        <button>Profile Info</button>
        <button>Chat</button>
      </div>
      <PhoneIcon sx={{paddingLeft:'40px', fontSize: 35}}/>
    </div>
  )
}

export default AccidentsInfo