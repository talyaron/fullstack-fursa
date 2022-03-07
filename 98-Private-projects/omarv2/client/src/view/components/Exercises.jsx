import React from 'react'
import Menu from './Menu'
import {useSelector, useDispatch} from 'react-redux'
import {selectExercises} from '../../slice/selectors'
import {SetselectedExercises} from "../../slice"
import {useNavigate} from 'react-router-dom'

function Exercises() {


  const Navigate= useNavigate();
  const dispatch = useDispatch();
  const exercises= useSelector(selectExercises)
  const  [selected,setSelected] = React.useState([]);
  
  const handleAddSelected = () => {
    dispatch(SetselectedExercises(selected))
    Navigate('/plandecider')
  }
  return (
    <div>
      <Menu />
      {exercises.map((elem) => (
        <div className="container" key={elem.id}>
          <div className="nameExercise">{elem.name}</div>
          <img className="imgExercise" src={elem.img}></img>
          {!selected.includes(elem.id) && (
            <button
              className="btnExercise"
              onClick={() => setSelected((prev) => [...prev, elem.id])}
            >
              select
            </button>
          )}
          {selected.includes(elem.id) && (
            <button
              className="btnExercise"
              onClick={() =>
                setSelected((prev) => prev.filter((item) => item !== elem.id))
              }
            >
              unselect
            </button>
          )}
        </div>
      ))}
      <button className="BackButton" onClick={handleAddSelected}>done</button>
    </div>
  );
}

export default Exercises
