import React from 'react';
import './App.scss';
import Register from './view/pages/Register/Register';
import MainTemplate from './view/pages/MainTemplate/MainTemplate';
import ListForm from './view/pages/ListForm/ListForm';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions/Actions'

function App() {
  const counter: any = useSelector<any>(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <ListForm /> */}
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
