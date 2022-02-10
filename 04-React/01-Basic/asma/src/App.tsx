import './App.scss';

//components
import Card from './view/components/card/Card';

const students:Array<Place> = [{name:'Saleem', place:'Mashad', img:'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1'}];

interface Place{
  name:string;
  place:string;
  img:string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {students.map((student, index)=>{
        const {name, place, img} = student; //deconstractor 

        return <Card key={index} info={{name, place, img}}/>
      })}
      </header>
    </div>
  );
}

export default App;