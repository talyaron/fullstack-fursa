
import  './homepage.scss';
import * as React from 'react';
// import React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../../components/card/Card';
import{useState} from'react';
import {Link} from 'react-router-dom';
import Nav from '../../components/nav/Nav';

// const Tab = createBottomTabNavigator();
// function MyTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     );
//   }
//   function SettingsScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }

//   function HomeScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }

const horses:Array<horse>=[{name:'Zoro',age:5,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnVjp6dcfqRT0CGg5Q89VXbV0RsfJ-Y9png&usqp=CAU'},
{name:'Ice',age:6,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxcYVFc1xSuH9jgYeJgDXsVw0P7KdnX53UA&usqp=CAU'}]

interface horse{
  name:string;
  age:number;
  img:string;
}


function Homepage() {
  const [names,Setname]=useState("Zoro");
  const [pics,Setphoto]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yr60poUFJojpky70RI6hrTBtWx5Dm3ifwQ&usqp=CAU");
const names2=["Simba","Ice","Gucci","Sun","Ben"];
// const horses2=['data:image/jpeg;base64,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',
// 'data:image/jpeg;base64,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',
// // "Gucci","Sun","Ben"
// ];

function changename(e: any) {
  e.preventDefault();
   var nameInArr = names2[Math.floor(Math.random()*names2.length)];
   Setname(nameInArr);
}

    return (
        <div className='maindiv'>
            <h3 className="h">Welcome to our farm</h3>
            {/* <Link to='/invoices'>Invoices</Link> */}
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni deleniti deserunt, accusamus distinctio et minus similique! Officia quae, alias natus optio temporibus saepe voluptates in nostrum reiciendis vitae, facilis ex.</p>
{/* <img src="data:image/jpeg;base64,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" alt="" /> */}
{/* <div className='listdiv'> */}
   {/* <div className="names"> */}
{/* 
<h3>{names}</h3 > */}
{/* <h3>{pics}</h3> */}
{/* <button onClick={changename} className='btn' type="submit">click to see all the horses names</button> */}

{/* </div> */}
{/* <button onClick={showhorse} className='btn' type="submit">click to see all the horses</button> */}

  {/* {horses.map((horses,index)=>{
         const {name,age,img}=horses;
         return <Card key={index} info={{name,age,img}}/>
        })} */}
        {/* </div> */}
<div className="ani">
        <div className='animation'>

        </div></div>
   
            </div>

   

    );
}

export default Homepage;