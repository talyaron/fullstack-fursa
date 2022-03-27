import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import "./Profile.scss";
import { updateUser,selectUser } from '../../../app/reducers/userReducer';
import { useAppSelector,useAppDispatch } from '../../../app/hooks';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// const card = (
     
//   <React.Fragment>

//     <CardContent className="card-content">
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//         {user}
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Edit</Button>
//     </CardActions>
//   </React.Fragment>
 
// );
const images = [
  {
    url: 'https://static.zara.net/photos///2022/V/0/1/p/2377/888/620/2/w/906/2377888620_2_1_1.jpg?ts=1646840907439',
    title: 'PURCHASES',
    width: '40%',
  },
  {
    url: 'https://static.zara.net/photos///2022/V/0/1/p/4341/802/631/2/w/1854/4341802631_9_2_1.jpg?ts=1643818485292',
    title: 'SETTINGS',
    width: '30%',
  },
  {
    url: 'https://static.zara.net/photos///2022/V/0/1/p/2739/474/712/2/w/906/2739474712_2_12_1.jpg?ts=1645639424249',
    title: 'PROFILE',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


export default function Profile() {
      const user = useAppSelector(selectUser);
    const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
     
  <React.Fragment>

    <CardContent className="card-content">
      <Typography sx={{ fontSize: 20,fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        {user.name.toUpperCase()}
         <br />
          <br />
          
      </Typography>
      <Typography sx={{ fontSize: 20,fontWeight: 'bold' }} color="text.secondary"  variant="h5" component="div">
        {user.email}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {/* adjective */}
         <br />
          <br />

      </Typography>
      <Typography variant="body2" fontWeight="bold">
        Welcome back, nice to meet you again!
        <br />
        
      </Typography>
       <br />
        <br />
       <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: 620}}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </CardContent>
    <CardActions>
      <Button size="small">Edit</Button>

    </CardActions>
  </React.Fragment>
 
);
  
  return (
      <div className="container">
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
      
    </Box>
     </div>

  );
}
