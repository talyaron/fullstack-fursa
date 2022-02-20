import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Explore from "@mui/icons-material/Explore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import MessageIcon from "@mui/icons-material/Message";
import "../components/Bottombar.scss";
import { useNavigate } from "react-router-dom";
export interface data {
  name: string;
}
function Bottombar(prop: data) {
  const [value, setValue] = React.useState("explore");
  const [color, setColor] = React.useState('');
  const navigate = useNavigate();
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
          value="explore"
          onClick={() => {
            navigate("/");
          }}
          style={{ color: color }}
          icon={<Explore />}
        />
        <BottomNavigationAction
          label="Events"
          value="events"
          onClick={() => {
            navigate("/events");
          }}
          style={{ color: color }}
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
