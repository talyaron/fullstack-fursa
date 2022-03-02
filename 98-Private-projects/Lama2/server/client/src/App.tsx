import React from 'react';
import logo from './logo.svg';
import './App.scss';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import Header from './view/components/header/header';
import Homepage from './view/pages/homepage/homepage';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileButton from './view/pages/signIn/signin';
// import TextInput from "./features/text/TextInput";
import { useAppSelector, useAppDispatch } from '../src/app/hooks';
import { selectProducts } from './features/productsReducer/products'
import { selectrainers } from './features/trainersReducer/trainer'

// const students:Array<Place> = [{name:'Saleem', place:'Mashad'},{name:'Mona',place:"Nazereth"}];
// interface Place{
//   name:string;
//   place:string
// }
const text = "hii all";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts)
  const trainers=useAppSelector(selectrainers)

  return (
    <div className="App">
      <header className="App-header">
        {/* <Card />
        <Card />
        <Card /> */}

        <Header />

        {/* <SignUp /> */}

        <Homepage />
        <div>
          {products.status !== 'loading' ? products.arrProducts.map((product, index) => {
            return (<p key={index}>{product.title}</p>

            )
          }) : <div>loading</div>}
    
          </div>
        


        {/* {students.map((student, index)=>{
        return <Card key={index} title={student.name} place={student.place} />
      })} */}

      </header>
    </div>
  );
}

export default App;


{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<Card />
<p>
  the text  is {text}
</p>

<a  
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}
