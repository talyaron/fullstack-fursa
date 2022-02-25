import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Explore from "@mui/icons-material/Explore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import MessageIcon from "@mui/icons-material/Message";
import "../components/Bottombar.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export interface data {
  name: string;
}
function Bottombar(prop: data) {
  const [value, setValue] = React.useState("mainpage");
  //const [color, setColor] = React.useState(0);
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
            color: "#ff4500",
           // color: "white",
            borderRadius: "0.3rem",
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
          position: "fixed",
          bottom: "0",
        }}
      >
        <BottomNavigationAction
          label="Explore"
          value="mainpage"
          onClick={() => {
            navigate("/mainpage");
            
          }}
          // style={{ color: color }}
          icon={<Explore />}
        />
        <BottomNavigationAction
          label="Events"
          value="events"
          onClick={() => {
            navigate("/events");
          }}
          icon={<EventIcon />}
        />
        <BottomNavigationAction
          label="Messages"
          value="messages"
          icon={<MessageIcon />}
        />

        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

export default Bottombar;
