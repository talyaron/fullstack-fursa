import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blueGrey, green, purple, red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: blueGrey[500],
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      backgroundColor: 'green',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:hover': {
      backgroundColor: green[700],
    },
  }));
  
  
  
  export default function CustomizedButtons() {
    return (
      <ColorButton
      
      sx={{
        width: 150,
        fontSize:20,
      }}
        variant="contained"
      >
        Next
      </ColorButton>
    );
  }
  

const Button = ({ title, onClickHandler }) => {
    return (
      <div
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          borderRadius: "4px",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={onClickHandler}
      >
        {title}
      </div>
    );
  };
  export default Button;
  