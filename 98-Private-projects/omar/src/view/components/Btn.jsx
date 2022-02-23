import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blueGrey, green, red } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: blueGrey[500],
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    backgroundColor: 'green',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'none',
    borderColor: '#005cbf',
  },
  '&:hover': {
    backgroundColor: green[700],
  },
}));



export default function CustomizedButtons({title,style}) {
  return (
    <ColorButton
    sx={{
      width: 150,
      fontSize: 20,
    }}
      variant="contained"
    >
      {title}
    </ColorButton>
  );
}
