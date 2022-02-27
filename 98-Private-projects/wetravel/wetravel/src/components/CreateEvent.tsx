import React from "react";
import Header from "./Header";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import "../components/CreateEvent.scss";
import camp from '../Images/camp.jpeg'

function CreateEvent() {
  const handleChange = () => {};
  let history = useNavigate();
  const [value, setValue] = React.useState([null, null]);
  return (
    <div className="container">
        <div className="login__inner">
          <TextField
            id="outlined-name"
            label="Event title"
            onChange={handleChange}
            style={{
              borderRadius: "1rem",
              width: "90%",
              border: "1px solid",
              backgroundColor: "#aaa",
              opacity: "0.4",
            }}
          />

          <TextField
            id="outlined-uncontrolled"
            label="Event details"
            style={{
              borderRadius: "1rem",
              width: "90%",
              height: "10vh",
              margin: "1rem",
              border: "1px solid",
              backgroundColor: "#aaa",
              opacity: "0.4",
            }}
          />
          <div className="date">
            <label className="start">Start date:</label>
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
            <label className="end">End date:</label>
            <input
              type="date"
              id="end"
              name="trip-end"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
          <div className="img">
            <h3>Upload over photo</h3>
            <img src={camp} />
            <div className="textbottom">
              <h2>Uploaded</h2>
            </div>
          </div>
          <button
            onClick={() => {
              //console.log("clicked");
              //history("");
            }}
          >
            Create event
          </button>
        </div>
      </div>
  );
}

export default CreateEvent;
