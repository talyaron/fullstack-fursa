import React from 'react';
import logo from './logo.svg';
import './App.scss';

//components
import { title } from 'process';
import MainHeader from './view/components/main header/MainHeader';
import ClassBox from './view/components/classBox/ClassBox';
import ClassContainer from './view/components/classContainer/ClassContainer';

interface Box{
  name: string;
  teacher: string;
}

const box = {name:'Class 1A', teacher:'suzan kassabry'};
const boxes = [box, box]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeader></MainHeader>
      </header>
      <ClassContainer/>

    </div>
  );
}

export default App;
