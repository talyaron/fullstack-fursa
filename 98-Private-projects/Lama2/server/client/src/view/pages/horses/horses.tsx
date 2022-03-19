
import  './horses.scss';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../../components/trainersCard/card';
import{useState} from'react';
import {Link} from 'react-router-dom';
// import Nav from '../../components/nav/Nav';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/header';



function Horses() {

    interface Prop {
        name: string;
        image: string;
        age:number;
        level:number,
        desc: string;
    }
    
    const horses: Array<Prop> = [{name: 'Ice', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2M94BA7drzUEO41zOfDW76XWCPYDstn2kwQ&usqp=CAU', 
    age:5,level:1,desc: "description" },
    {name: 'Zoro', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjzenJ7nPTkPdTefGWrW_kDw291M4fQewmA&usqp=CAU',
    age:10,level:3, desc: "description"},
    {name: 'Gucci', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwbEuPr5LHLZpewaQ-mJzR1S2CYaC1jHlrA&usqp=CAU',
    age:9,level:3,desc: "description"},
    {name: 'Hugsy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhA_YC2KPGviLf8GNwB9rKj4mNyEOtqhxdBg&usqp=CAU',
    age:8,level:2,desc: "description"},
    {name: 'Sun', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeUZj8tEPclxe93XIp5vsO65tRc3RmwH03w&usqp=CAU',
    age:5,level:1,desc: "description"},
    {name: 'Marko', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEw9cX-TYZNVZUKM-u-GDm524JK7OdZRXHg&usqp=CAU',
    age:7,level:2,desc: "description"},
    {name: 'Simba', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRxxm3-GYTCs4xIf6f8o0OpPW6J7GNsBkxQ&usqp=CAU',
    age:7,level:3,desc: "description"},
    {name: 'Vanilla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9dosAVnCaOYGIlt7zThLnmpHDz-xv0V_dA&usqp=CAU',
    age:3,level:1,desc: "description"}]



    return (

        <div className="maindivhorses">
            <Header />
     
            <h3>Our horses</h3>
       
        <div className="maindivhorses_card">
            {horses.map((horse, index) => {
                return <Card key={index}  name={horse.name} age={horse.age} level={horse.level} image={horse.image} desc={horse.desc}></Card>
            })}
        </div>
    </div>
    
                 

   

    );
}

export default Horses;