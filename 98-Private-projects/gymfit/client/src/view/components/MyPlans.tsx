import React from 'react'
import Menu from './Menu'
import {useSelector} from "react-redux";
import {selectPlans} from "../../slice/selectors"
import { useNavigate } from 'react-router-dom';

function MyPlans() {
  const plans = useSelector(selectPlans);
  console.log(plans)
  const Navigate = useNavigate();
  return (
    <div>
      <Menu/>
{plans.map((plan:any, index:any) => {
  return (
    <div className="container" key={index}>
      <div className='PlanTitle'>{plan.name}</div>
      <div className='PlanTitle'>{plan.time}</div>
      <div>
        {plan.exercies.map((elem:any) => (
          <>
            <div className='PlanTitle'>{elem.name}</div>
            <img className="imgExercise" src={elem.img}></img>
          </>
        ))}
      </div>
    </div>
  );
})}
      <button className="BackButton" onClick={() => Navigate(-1)}>back</button>
    </div>
  )
}

export default MyPlans
