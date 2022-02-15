import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Link } from 'react-router-dom';

//components
import Card from './view/components/card/Card';
import MyCard from './view/components/card/Card';
import { title } from 'process';

// const students:Array<Place> = [{name:'Saleem', place:'Mashad'},{name:'Mona',place:"Nazereth"}];
// interface Place{
//   name:string;
//   place:string
// }

interface Box{
  image: string;
  title: string;
}

const box = {image:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg', title:'Hello I am a title'};
const boxes:Array<Box> = [box, box, box, box];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      {boxes.map((box1, index)=>{
        const {image, title} = box1
        return <MyCard key={index} info = {box1} />
      })
        // <MyCard image={box.image} title={box.title} />
      /* {students.map((student, index)=>{
        return <Card key={index} title={student.name} place={student.place} />
      })} */}
      </header>

      <Link to='/page1'>go to page 1</Link>
      <Link to='/page2'>go to page 2</Link>
    </div>
  );
}

export default App;
