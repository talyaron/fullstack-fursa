import "./homePage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mainbar from "../../components/menu/menu";
import HelpShow from "../../../features/help/HelpShow";
import HelpInput from "../../../features/help/HelpInput";

const Help = () => {
  return (
    <div className="warpper">
      <Mainbar></Mainbar>
      <HelpInput />
      <HelpShow />
    </div>
  );
};

export default Help;
