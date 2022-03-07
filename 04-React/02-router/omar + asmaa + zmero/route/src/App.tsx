import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from './views/pages/login/login'
function App() {
  return (
    <div className="App">
<<<<<<< HEAD:04-React/02-router/omar + asmaa + zmero/route/src/App.tsx
      <Login></Login>
=======
      <Texinput setTextArray={settextArray} textArray={textArray} ></Texinput>
      <div>
        {textArray.map((item, index)=>{
          
          return <Texting key={index} text ={item}></Texting>
        })}
      </div>
     
>>>>>>> tal:04-React/03-LiftingStateUp/saleem-majd-asmaa/simple/src/App.tsx
    </div>
  );
}

export default App;
