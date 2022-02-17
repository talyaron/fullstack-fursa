import React from "react";
import { useState } from "react";
import "../components/Input.scss";

interface Arr_state {
  setArr: any;
  arr: any;
}
function Input(prop: Arr_state) {
  const [Sentance, setSentance] = useState("");
  const { arr, setArr } = prop;
  function handleChange(e: any) {
    setSentance(e.target.value);
  }
  function handelClick() {
    if (Sentance) {
      setArr([...arr, { value: Sentance }]);
      console.log(Sentance);
    }
    setSentance("");
  }
  return (
    <div className="div-class">
      <input value={Sentance} onChange={handleChange} type="text" />
      <button onClick={handelClick}>Send</button>
    </div>
  );
}

export default Input;
