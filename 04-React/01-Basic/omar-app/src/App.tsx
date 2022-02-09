import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
//components
import Backbutton from './view/components/Back/BackButton'
import Exercise from './view/components/exercise/Exercise';
// import Login from './view/components/login/Login';
import LogoImg, { Aa } from "./view/components/image/Image"
import Profile from './view/components/profile/Profile'

// const members = [{ name: 'Saleem', part: 'chest' }, { name: 'Omar', part: "Legs" }];
const App = () => {

  // const [omar, setomar] = useState(10);

  // const handleAddCount = () => {
  //   setomar(prev => prev + 1);
  // }

  return (<>
    <div className="App">
      <div className="App-div">
        {/*         
        <Button variant="contained" onClick={handleAddCount}>Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
        {/* {members.map((member, index)=>{
        return <Exercise key={index} name={member.name} part={member.part} />
      })} */}
        {/* <Login /> */}
        {/* <Button className="BackButton" variant="contained" > Back </Button> */}
        <Backbutton />
        <div className = 'AppTitle'> GymFit </div>
        <div className = 'subTitle'> Make the perfect body</div>
        <LogoImg />
        <Profile />
        {/* <Aa count={omar}/> */}
      </div>
    </div>
    {/* <div className='ImageCon'>
      <OmarComp />
    </div> */}
  </>
  );
}

export default App;
