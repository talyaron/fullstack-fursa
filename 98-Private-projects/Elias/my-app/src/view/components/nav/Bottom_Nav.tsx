import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import './Bottom_Nav.scss';




const Bottom_Nav = () => {

  const [value, setValue] = useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="botnav">
      <BottomNavigation /*sx={{ width:100}}*/ value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="Home"
          icon={<HomeIcon color="primary" />}
        />
        <BottomNavigationAction
          label="Notifications"
          value="Notifications"
          icon={<CircleNotificationsIcon color="primary" />} />
      </BottomNavigation>
    </div>
  );
}

export default Bottom_Nav;

