import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import CardSelect from './features/card/CardSelect';
import CardShow from './features/card/CardShow';
import Card from './component/card/Card';
import { useAppSelector, useAppDispatch } from './app/hooks';
import './App.scss';
import { selectImg, selectTxt } from './features/card/CardSlice';
import {updateInput} from './features/card/CardSlice';

function App() {
  const imgSrc = useAppSelector(selectImg);
  const imgTxt = useAppSelector(selectTxt);
  const dispatch = useAppDispatch();

  function handleInput(e:any){
    dispatch(updateInput(e.target.value));
  }

  return (
    <div className="App">
      <header className="App-header">

        <input type="text" onKeyUp={handleInput}/>

        <Card imgSrc={imgSrc} txt={imgTxt}></Card>

        <div className="cardContainer">
          <Card imgSrc={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} txt={'card 1'}></Card>
          <Card imgSrc={"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"} txt={'card 2'}></Card>
          <Card imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU"} txt={'card 3'}></Card>
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  );
}

export default App;
