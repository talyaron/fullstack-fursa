import React from 'react';
import logo from './logo.svg';
import './App.scss';

//components
import Card from './view/components/card/Card';

const imagesArr:Array<image> = [
  {link:"https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",title:"image 1"},
  {link:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", title:"image 2"}];
interface image{
  link:string;
  title:string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {imagesArr.map((image, index) =>
         {return <Card key={index} link={image.link} title={image.title}/>})}
      </header>
    </div>
  );
}

export default App;
