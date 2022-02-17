import { Link, Outlet } from "react-router-dom";
import MainHeader from "../../components/main header/MainHeader";
import SearchBar from "../../components/searchBar/SearchBar";
import Student, {studentInfo} from './Student'; 
import {useState, useEffect} from 'react';

function Students() {

    // const students:Array<studentInfo> = [
    //     {info: {firstName:'Maria', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'111111111', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
    //     {info: {firstName:'Suzan', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'222222222', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
    //     {info: {firstName:'Suzan', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'333333333', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}}
    // ]

    const [students, setStudents] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        fetch('/get-all-students').then(res => res.json()).then(data => {
            setStudents(data);
            console.log(data)
        })
    }, []);

    return (
        <div>
            <header className="App-header">
                <MainHeader></MainHeader>
            </header>
            <SearchBar></SearchBar>
            <div className="wrapper">
                <div className="left">
                    {students.map((student, index)=>{
                        //const {info: {firstName, lastName, father, mother, id, phone, fphone, mphone, email}} = student;
                        return <Student key={index} info={student} />
                    })}
                </div>
                <div className="right">
                    <Outlet />
                </div>
            </div>
            {/* <h1>students page</h1> */}
            <Link to='/'>go to main page</Link>
        </div>
    );
}

export default Students;