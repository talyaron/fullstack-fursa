import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

function PostReview(prop: {
  like: string;
  avatar: string;
  description: string;
  date: string;
  src: string;
}) {
  const [liked, setLiked] = useState("gray");
  const { like, avatar, src, description, date } = prop;
  return (
    <div style={{ padding: "1rem", margin: "auto"}}>
      <Card
        sx={{
          width: "90vw",
        }}
      >
        <CardHeader
        style={{ }}
          avatar={
            <Avatar
              src={avatar}
              sx={{ backgroundColor: "red" }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Shrimp and Chorizo Paella"
          subheader= {date}
        />
        <CardMedia
          component="img"
          height="fit-content"
          image={src}
          style={{ objectFit: "cover" }}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              onClick={() => {
                setLiked("red");
              }}
              style={{ color: liked }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default PostReview;
