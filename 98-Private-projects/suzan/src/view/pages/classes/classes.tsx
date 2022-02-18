import React from 'react';
import logo from './logo.svg';

//components
import { title } from 'process';
import MainHeader from '../../components/main header/MainHeader';
import ClassContainer from '../../components/classContainer/ClassContainer';
import { Link } from 'react-router-dom';

interface Box{
  name: string;
  teacher: string;
}

const box = {name:'Class 1A', teacher:'suzan kassabry'};
const boxes = [box, box]

function Classes() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeader></MainHeader>
        <Link to='classes'>new classes page</Link>
        <Link to='students'>new students page</Link>
        <Link to='teachers'>new teachers page</Link>
      </header>
      <ClassContainer/>

    </div>
  );
}

export default Classes;
