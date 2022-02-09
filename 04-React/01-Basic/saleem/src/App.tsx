import './App.scss';

import Assignment from './view/components/assignment/Assignment';
interface AssignmentP {
  month:string;
  day:string;
  time:number;
  background:string;
}
const assignments:Array<AssignmentP> = [ {month:'December',day:"Thursday" ,time:8 ,background:"10:00 EST  15:00 GMT"},
{month:'november',day:"friday" ,time:8 ,background:"08:30 EST  12:00 GMT"}];

function App() {
  return (
    <div className="App">
      <header className="App-header">

      {assignments.map((as, index)=>{return <assignment month={as.month} day={as.day} time={as.time} background={as.background} />
      })}
      </header>
    </div>
    
  );
}

export default App;
