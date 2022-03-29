import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './view/pages/home/home';
import Vitamins from "./view/pages/vitamins/vitamins";
import Treatment from "./view/pages/treatment/treatment";
import CalendarFun from "./view/pages/calendar/calendar";
import Navbar from "./view/components/navbar/Navbar";
import LogIn from "./view/pages/logIn/logIn";
import AddProducts from "./view/pages/addProducts/addProducts";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:productCategory" element={<Vitamins />} />
        <Route path="/treatment/:treatmentCategory" element={<Treatment />} />
        <Route path="calendar" element={<CalendarFun />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="addProducts" element={<AddProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;