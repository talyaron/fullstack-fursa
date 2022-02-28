import { Link, Outlet } from "react-router-dom";
import MainHeader from "../../components/main header/MainHeader";
import SearchBar from "../../components/searchBar/SearchBar";
import Student, {studentInfo} from './Student'; 
import { useState } from 'react';

function Students() {

    const arr:Array<studentInfo> = [
        {info: {firstName:'Suzan', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'207745638', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
        {info: {firstName:'Maria', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'218439247', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
        {info: {firstName:'Nora', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'634892469', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}}
    ]

    return (
        
        <div>
            <header className="App-header">
                <MainHeader></MainHeader>
            </header>

            <SearchBar></SearchBar>

            <div className="wrapper">
                <div className="left">
                    {arr.map((student, index)=>{
                        //const {info: {firstName, lastName, father, mother, id, phone, fphone, mphone, email}} = student;
                        return <Student key={index} info={student.info} />
                    })}
                </div>
                <div className="right">
                    <Outlet />
                </div>
            </div>
            {/* <h1>students page</h1> */}
        </div>
    );
}

export default Students;