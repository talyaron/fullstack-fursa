import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";

//pages
import Page1 from "./view/pages/page1/Page1";
import Page2 from "./view/pages/page2/Page2";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
