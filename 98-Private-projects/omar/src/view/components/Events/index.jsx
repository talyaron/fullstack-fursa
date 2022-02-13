import React, { useState } from "react";
import Button from "./Button";
import Label from "./Label";
import EventWrapper from "./EventWrapper";
import PopUp from "./Dialog";
import BasicSelect from "./BasicSelect";
const Events = (props) => {
  const [counter, setCounter] = useState(0);
  const [show, setshow] = useState(false);
  const handleAddCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <EventWrapper>
        <Button title={"Add Counter"} onClickHandler={handleAddCounter} />
        <Label content={counter} />
      </EventWrapper>
      <PopUp
        title={"test"}
        content={"aaaaaaaaaaaaaaaaaa"}
        onAgree={handleAddCounter}
      />
      <BasicSelect />
    </div>
  );
};

export default Events;
