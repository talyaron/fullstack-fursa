import React from 'react';
import './App.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Classes from './view/pages/classes/classes';
import Students from './view/pages/students/Students';
import StudentInfo from './view/pages/students/StudentInfo';
import Teachers from './view/pages/teachers/Teachers';
import SchoolsEvents from './view/pages/schoolsEvents/SchoolsEvents';
import SchoolClasses from './view/school/pages/classes/Classes';
import SchoolStudents from './view/school/pages/students/Students';
import StudentCard from './view/school/components/studentCard/StudentCard';
import SchoolTeachers from './view/school/pages/teachers/Teachers';
import TeacherCard from './view/school/components/teacherCard/TeacherCard';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Classes />} />
        {/* <Route path="students" element={<Students />} >
          <Route path=":studentId" element={<StudentInfo />} />
        </Route> */}

        {/* <Route path="teachers" element={<Teachers />} />
        <Route path="schoolsEvents" element={<SchoolsEvents />} /> */}

        <Route path="classes" element={<SchoolClasses />} />
        <Route path="students" element={<SchoolStudents />} >
          <Route path=':studentId' element={<StudentCard />} />
        </Route>
        <Route path="teachers" element={<SchoolTeachers />} >
          <Route path=':teacherId' element={<TeacherCard />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
