

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './view-components-bar/pages/HomePage';


function App() {

return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>} />
  </Routes>
</BrowserRouter>)
}
export default App;
