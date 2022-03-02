import React from 'react'
import Menu from './Menu'
import {useSelector} from "react-redux";
import {selectPlans} from "../../slice/selectors"
import { useNavigate } from 'react-router-dom';
function Music() {
  const plans = useSelector(selectPlans);
  console.log(plans)
  const Navigate = useNavigate();
  return (
    <div>
      <Menu/>
{plans.map((plan, index) => {
  return <div key={index}>
    <div>{plan.name}</div>
    <div>{plan.time}</div>
    <div>{plan.exercies.map(elem => (<><div>{elem.name}</div>
        <img src={elem.img}></img></>))}</div>
  </div>
})}
      <button onClick={() => Navigate(-1)}>back</button>
    </div>
  )
}

export default Music
