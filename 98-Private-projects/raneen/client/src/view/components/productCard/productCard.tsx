import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="container" sx={{ maxWidth: 345 }}>
      <CardHeader fontStyle="Apple Color Emoji"
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="SATIN DRESS"
        // subheader="September 14, 2016"
      />
      <CardMedia className="wrap"
        component="img"
        height="194"
        // width="160"
      sx={[
          { width: 1/2},
          {ml:2},
          ]}
 
        
        image ="https://static.zara.net/photos///2022/V/0/1/p/2341/650/520/17/w/1500/2341650520_1_1_1.jpg?ts=1646390724222"
        alt="Paella dish"
      />
      <CardContent > 
        <Typography variant="body2" color="text.secondary"
          sx={{display: 'inline'}}
        >
       Collared dress with a V-neckline, 
       long sleeves and shoulder pads. Inside button fastening at the front.
           
          
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
         <IconButton aria-label="share">
          <img  width="40px"src="https://previews.123rf.com/images/dmvector/dmvector1909/dmvector190900060/131424750-icono-de-carrito-de-compras-icono-de-carro-.jpg" alt="" />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>CARE:</Typography>
          <Typography paragraph>
          </Typography>
          <Typography paragraph >
          
Caring for your clothes is caring for the environment.
Lower temperature washes and delicate spin cycles are gentler on garments and help to protect the colour, shape and structure of the fabric. Furthermore, they reduce the amount of energy used in care processes.

Machine wash at max. 30ºC/86ºF with short spin cycle

Do not use bleach

Iron at a maximum of 110ºC/230ºF

Dry clean with tetrachloroethylene

Do not tumble dry
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography>
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
