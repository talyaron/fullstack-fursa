
import './trainers.scss';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../../components/trainersCard/card';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Nav from '../../components/nav/Nav';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/header';



function Trainers() {

    interface Prop {
        name: string;
        image: string;
        age:number;
        level:number,
        desc: string;
    }

    const trainers: Array<Prop> = [{ name: 'Joey', image: 'https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    age:20,level:1,desc: "description" },
    { name: 'Ross', image: 'https://m.media-amazon.com/images/M/MV5BMTQ2Mjg5ODIzNF5BMl5BanBnXkFtZTgwNjIwMjI0ODE@._V1_UX214_CR0,0,214,317_AL_.jpg', 
    age:25,level:2,desc: "description" },
    { name: 'Phoebe', image: 'https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_UY317_CR8,0,214,317_AL_.jpg',
    age:35,level:3,desc: "description" },
    { name: 'Rachel', image: 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg',
    age:42,level:3,desc: "description" },
    { name: 'Chandler', image: 'https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_UY317_CR17,0,214,317_AL_.jpg',
    age:25,level:2,desc: "description" },
    { name: 'Monica', image: 'https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_UY317_CR7,0,214,317_AL_.jpg',
    age:39,level:3,desc: "description" }]



    return (

        <div className="maindiv2">
            <Header />
            <h3>Our trainers</h3>

            <div className="maindiv2_card2">
                {trainers.map((trainer, index) => {
                    return <Card key={index} name={trainer.name} age={trainer.age}
                    level={trainer.level}
                    image={trainer.image} desc={trainer.desc}></Card>
                })}
            </div>
        </div>

    );
}

export default Trainers;