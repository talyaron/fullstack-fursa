import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import SchoolsEvents from "./view/pages/schoolsEvents/SchoolsEvents";
import StudentInfo from "./view/pages/students/StudentInfo";

//pages
import Students from "./view/pages/students/Students";
import Teachers from "./view/pages/teachers/Teachers";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="students" element={<Students />} >
        <Route path=":studentId" element={<StudentInfo />} />
      </Route>

      <Route path="teachers" element={<Teachers />} />
      <Route path="schoolsEvents" element={<SchoolsEvents />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
