import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './view/pages/home/home';
import Vitamins from "./view/pages/vitamins/vitamins";
import Product from "./view/pages/product/product";
import Cosmetics from './view/pages/cosmetics/cosmetics';
import SugerFree from './view/pages/sugerfree/sugerfree';
import { ProductInt } from "./view/pages/product/product";
import Treatment from "./view/pages/treatment/treatment";
// import { TreatmentInt } from "./view/pages/treatment/treatment";
import CalendarFun from "./view/pages/calendar/calendar";
import Navbar from "./view/components/navbar/Navbar";
import LogIn from "./view/pages/logIn/logIn";
import AddProducts from "./view/pages/addProducts/addProducts";


function App() {

  const vitaminsProducts: Array<ProductInt> = [{ id: 1, name: 'Vitamin D', text: "Vitamin D helps regulate the amount of calcium and phosphate in the body. These nutrients are needed to keep bones, teeth and muscles healthy. A lack of vitamin D can lead to bone deformities such as rickets in children, and bone pain caused by a condition called osteomalacia in adults", img: 'https://img.mako.co.il/2016/03/14/shutterstock_59410978_i.jpg' },
  { id: 2, name: 'Chlorella', text: "Chlorella as a supplement improves cholesterol levels and rides the body of toxins.", img: 'https://eatwell.co.il/wp-content/uploads/2017/12/Chlorella-eatwell-123.jpg' },
  { id: 3, name: 'Omega3', text: "Omega3 fatty acids are incredibly important.They have many powerful health benefits for your body and brain.", img: 'https://www.vitaplus.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%9E%D7%92%D7%94-3.jpg' }
  ];

  const cosmeticsProducts: Array<ProductInt> = [{ id: 1, name: 'Organic-Cosmetics', img: 'https://static.manna.global/img/cms/uk/980/5170-how-much-do-you-know-about-natural-cosmetics-152004.png', text: "" },
  { id: 2, name: 'Handmade-Cosmetics', img: 'https://previews.123rf.com/images/vchalup/vchalup1702/vchalup170200163/73392103-skincare-concept-woman-is-preparing-homemade-cosmetics-or-makeup-.jpg', text: "" },
  { id: 3, name: 'Mud-Masks', img: 'https://thumbs.dreamstime.com/b/preparing-cosmetic-mud-mask-aloe-vera-lavender-essential-oil-facial-clay-spa-products-stones-natural-cosmetics-home-137897112.jpg', text: "" }
  ];

  const sugerFreeProducts: Array<ProductInt> = [{ id: 1, name: 'product1', img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F02%2Fsugarfreeproducts.jpg", text: "" },
  { id: 2, name: 'product2', img: "https://world.openfoodfacts.org/images/products/380/006/571/8592/front_en.3.400.jpg", text: "" },
  { id: 3, name: 'product3', img: "https://sibuchocolate.com/wp-content/uploads/2019/12/Sugar-Free-Chocolate.jpg", text: "" }
  ];


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vitamins" element={<Vitamins />}>
          <Route path=":productId" element={<Product products={vitaminsProducts} />} />
        </Route>
        <Route path="cosmetics" element={<Cosmetics />}>
          <Route path=":productId" element={<Product products={cosmeticsProducts} />} />
        </Route>
        <Route path="sugerfree" element={<SugerFree />} >
          <Route path=":productId" element={<Product products={sugerFreeProducts} />} />
        </Route>
        <Route path="cupping%20therapy" element={<Treatment title="CuppingTherapy" />} />
        <Route path="facial%20treatment" element={<Treatment title="FacialTreatment" />} />
        <Route path="hopi%20candles" element={<Treatment title="HopiEarCandles" />} />
        <Route path="calendar" element={<CalendarFun />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="addProducts" element={<AddProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;