import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";

function previousAccident() {
    const [accident, setAccident] = useState("");
    useEffect(() => {
        axios.get("/get-previous-accidents").then(({ data }) => {
          console.log(data);
        //   setKitties(data);
        });
      }, []);

    return (<div></div>
    )

}
export default previousAccident;