<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {useState} from 'react';
=======
import {useState} from 'react';
import './App.scss';

//components
import Card from './view/components/card/Card';

const students:Array<Place> = [
  {name:'Saleem', place:'Mashad', img:'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1'},
  {name:'Mona',place:"Nazereth", img:'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200'},
  {name:'Saleem', place:'Mashad', img:'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1'},
  {name:'Mona',place:"Nazereth", img:'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200'}
];

interface Place{
  name:string;
  place:string;
  img:string;
}

function App() {
  const [genralCounter, setGeneralCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Number of counts:{genralCounter}</h1>
      {students.map((student, index)=>{
        const {name, place, img} = student; //deconstractor 

        return <Card key={index} info={{name, place, img}} setGeneralCounter={setGeneralCounter} genralCounter={genralCounter} />
      })}
      </header>
    </div>
  );
}

export default App;
>>>>>>> AlaaTemp
=======
import {useState, useEffect} from 'react';
>>>>>>> zmero
import './App.scss';

//components
import Card from './view/components/card/Card';

const students:Array<Place> = [
  {name:'Saleem', place:'Mashad', img:'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1'},
  {name:'Mona',place:"Nazereth", img:'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200'},
  {name:'Saleem', place:'Mashad', img:'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1'},
  {name:'Mona',place:"Nazereth", img:'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200'}
];

interface Place{
  name:string;
  place:string;
  img:string;
}

function App() {
const [kitttens, setKittens] = useState([]);
  useEffect(()=>{
    fetch('/get-all-users').then(res=>res.json()).then(data=>{
      
      console.log(data)
      setPpls(data);
      
    })

    //fetch kittens
    fetch('/get-all-kitens')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setKittens(data);
    }).catch(err=>{
      console.error(err);
    })
  },[])
const [ppls,setPpls ] = useState([])
>>>>>>> zmero
  const [genralCounter, setGeneralCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
=======
        {ppls.map((ppl:any,index)=>{
          return <p key={index}>{ppl.name}</p>
        })}
      
    <h1>Kittens</h1>
    {kitttens.map((kity:any)=>{
      return<p key={kity._id}>{kity.name}</p>
    })}
        <h1>Number of counts:{genralCounter}</h1>
      {students.map((student, index)=>{
        const {name, place, img} = student; //deconstractor 

        return <Card key={index} info={{name, place, img}} setGeneralCounter={setGeneralCounter} genralCounter={genralCounter} />
      })}
      </header>
    </div>
  );
}

export default App;
<<<<<<< HEAD
=======
import {useState} from 'react';
import './App.scss';

//components
import Card from './view/components/card/Card';

const students:Array<Place> = [
  {name:'Saleem', place:'Mashad', img:'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1'},
  {name:'Mona',place:"Nazereth", img:'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200'},
  {name:'Saleem', place:'Mashad', img:'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1'},
  {name:'Mona',place:"Nazereth", img:'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200'}
];

interface Place{
  name:string;
  place:string;
  img:string;
}

function App() {
  const [genralCounter, setGeneralCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Number of counts:{genralCounter}</h1>
      {students.map((student, index)=>{
        const {name, place, img} = student; //deconstractor 

        return <Card key={index} info={{name, place, img}} setGeneralCounter={setGeneralCounter} genralCounter={genralCounter} />
      })}
      </header>
    </div>
  );
}

export default App;
>>>>>>> omar
=======
>>>>>>> tal
>>>>>>> AlaaTemp
