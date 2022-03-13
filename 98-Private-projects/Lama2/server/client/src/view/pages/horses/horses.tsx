
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
        desc: string;
    }
    
    const trainers: Array<Prop> = [{name: 'Ice', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2M94BA7drzUEO41zOfDW76XWCPYDstn2kwQ&usqp=CAU', desc: "description" },
    {name: 'Zoro', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjzenJ7nPTkPdTefGWrW_kDw291M4fQewmA&usqp=CAU', desc: "description"},
    {name: 'Gucci', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwbEuPr5LHLZpewaQ-mJzR1S2CYaC1jHlrA&usqp=CAU',desc: "description"},
    {name: 'Hugsy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhA_YC2KPGviLf8GNwB9rKj4mNyEOtqhxdBg&usqp=CAU',desc: "description"},
    {name: 'Sun', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeUZj8tEPclxe93XIp5vsO65tRc3RmwH03w&usqp=CAU',desc: "description"},
    {name: 'Marko', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEw9cX-TYZNVZUKM-u-GDm524JK7OdZRXHg&usqp=CAU',desc: "description"},
    {name: 'Simba', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRxxm3-GYTCs4xIf6f8o0OpPW6J7GNsBkxQ&usqp=CAU',desc: "description"},
    {name: 'Vanilla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9dosAVnCaOYGIlt7zThLnmpHDz-xv0V_dA&usqp=CAU',desc: "description"}]



    return (

        <div className="maindivhorses">
            <Header />
     
            <h3>Our horses</h3>
       
        <div className="maindivhorses_card">
            {trainers.map((trainer, index) => {
                return <Card key={index}  name={trainer.name} image={trainer.image} desc={trainer.desc}></Card>
            })}
        </div>
    </div>
    
                 

   

    );
}

export default Horses;