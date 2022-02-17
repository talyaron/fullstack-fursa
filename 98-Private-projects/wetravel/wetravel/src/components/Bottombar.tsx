import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Explore from "@mui/icons-material/Explore";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import MessageIcon from "@mui/icons-material/Message";
import "../components/Bottombar.scss";
import { height } from "@mui/system";
function Bottombar() {
  const [value, setValue] = React.useState("recents");
  const [color, setColor] = React.useState("#D0D0D0");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    
    <div className="bottombar">
      <BottomNavigation
        sx={{
          width: 500,
          "&  .Mui-selected ,.Mui-selected > svg ": {
            backgroundColor: "orange",
            color: "white",
            borderTopLeftRadius: "0.3rem",
            borderTopRightRadius: "0.3rem",
            display: "flex",
            flexDirection: "row",
            margin: "0.3rem",
          },
        }}
        value={value}
        onChange={handleChange}
        style={{
          width: "inherit",
          height: "inherit",
        }}
      >
        <BottomNavigationAction
          label="Explore"
          value="folder"
          style={{ color: color }}
          icon={<Explore />}
        />
        <BottomNavigationAction
          label="Events"
          value="events"
          style={{ color:color }}
          icon={<EventIcon />}
        />
        <BottomNavigationAction
          label="Messages"
          value="messages"
          style={{ color: color }}
          icon={<MessageIcon />}
        />

        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          style={{ color: color }}
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

export default Bottombar;
