import { useEffect, useState } from "react";
import Ajv from "ajv";
import { weather } from "../App";
import { array } from "../App";
import City from "./City";
const ajv = new Ajv();
function Api(prop: array) {
  const arr = [...prop.arr];
  console.log(arr);
  return (
    <div>
      {arr.map((item, index) => {
        return <City key={index} city={item.city} src={item.src} />;
      })}
    </div>
  );
}

export default Api;
