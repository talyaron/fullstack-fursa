import * as React from 'react';
import './BottomNav.css'
import { styled } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom'
export default function LabelBottomNavigation() {

  const BtmNav = styled(BottomNavigationAction) (({ theme }) => ({
    '&:hover': {
      backgroundColor: '#78909c',
      color:'#f5f5f5'
    },
  }));

  const [value, setValue] = React.useState("profile");

  const Navigate= useNavigate();
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };
  

  return (
    <div className="BottomNav">
      <BottomNavigation
        sx={{
          width: 500,
          "&  .Mui-selected ,.Mui-selected > svg ": {
            backgroundColor: "#78909c",
            color: "#f5f5f5",
            fontSize:22,
            borderRadius: "0.3rem",
            display: "flex",
            flexDirection: "row",
            margin: "0",
           justifyContent:"space-between"
          },
        }}
        value={value}
        onChange={handleChange}
      >
        <BtmNav
          label="Plans"
          value="Plans"
          onClick={() => {
            Navigate("/PersonalPlan");
          }}
          icon={<FitnessCenterIcon style={{ fontSize: 50 }}/>}
        />
        <BtmNav
          label="Food"
          value="Food"
          onClick={() => {
            Navigate("/Food");
          }}
          
          icon={<FastfoodIcon style={{ fontSize: 50 }}/>}
        />
        <BtmNav
          label="Profile"
          value="Profile"
          onClick={() => {
            Navigate("/Profile");
          }}
          icon={<AccountCircleIcon style={{ fontSize: 50 }} />}
        />
      </BottomNavigation>
    </div>
  );
}