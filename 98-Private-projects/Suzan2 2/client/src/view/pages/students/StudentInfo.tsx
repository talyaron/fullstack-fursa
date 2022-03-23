import {useParams} from 'react-router-dom';
import { studentInfo } from './Student';

const arr = [
    {firstName:'Suzan', lastName:'Kassabry 1', father:'Emad', mother:'Linda', id:'111111111', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'},
    {firstName:'Suzan', lastName:'Kassabry 2', father:'Emad', mother:'Linda', id:'222222222', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'},
    {firstName:'Suzan', lastName:'Kassabry 3', father:'Emad', mother:'Linda', id:'333333333', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}
]

function StudentInfo() {
    const {studentId} = useParams();

    function getStudentInfo(id:string|undefined,students:Array<any>) {
        const student =  students.find(student=> student.id == id)
        if(student){
          return [student.firstName, student.lastName, student.father, student.mother, student.phone, student.fphone, student.mphone, student.email];
        } else {
          return ''
        }
      }

      const info = getStudentInfo(studentId, arr);
      //0 first name
      //1 last name
      //2 father
      //3 mother
      //4 phone
      //5 fphone
      //6 mphone
      //7 email

    return(
        <div className='studentInfo'>
            <h1> {info[0]} {info[1]} </h1>
            <p><span>student's id:</span> {studentId}</p>
            <p><span>student's email:</span> {info[7]}</p>
            <p><span>father's name:</span> {info[2]}</p>
            <p><span>father's phone:</span> {info[5]}</p>
            <p><span>mother's name:</span> {info[3]}</p>
            <p><span>mother's phone:</span> {info[6]}</p>
            <p><span>student's email:</span> {info[7]}</p>
        </div>
    );
}

export default StudentInfo;