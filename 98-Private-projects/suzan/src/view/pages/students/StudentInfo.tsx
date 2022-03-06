import {useParams} from 'react-router-dom';
import { studentInfo } from './Student';

const arr:Array<studentInfo> = [
  {info: {firstName:'Suzan', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'207745638', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
  {info: {firstName:'Maria', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'218439247', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
  {info: {firstName:'Nora', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'634892469', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}}
]

function StudentInfo() {
    const {studentId} = useParams();

    function getStudentInfo(id:string|undefined,students:Array<studentInfo>) {
        const student =  students.find(student=> student.info.id === id)
        if(student){
          return [student.info.firstName, student.info.lastName, student.info.father, student.info.mother, student.info.phone, student.info.fphone, student.info.mphone, student.info.email];
        } else {
          return ''
        }
      }

      let info = getStudentInfo(studentId, arr);
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