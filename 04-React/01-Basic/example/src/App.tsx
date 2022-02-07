import './App.scss';

//components
import Card from './view/components/card/Card';

const students:Array<Place> = [{name:'Saleem', place:'Mashad'},{name:'Mona',place:"Nazereth"}];
interface Place{
  name:string;
  place:string
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {students.map((student, index)=>{
        return <Card key={index} title={student.name} place={student.place} />
      })}
      </header>
    </div>
  );
}

export default App;
