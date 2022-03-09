import './sugerfree.scss'
//import PicShow from './PicShow';
import { ProductProps } from './productCard';
import ProductCard from './productCard'
import { Outlet } from 'react-router-dom';



const sugerFreeProducts = [{ id: 1, name: 'product1', img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F02%2Fsugarfreeproducts.jpg", text: "" },
{ id: 2, name: 'product2', img: "https://world.openfoodfacts.org/images/products/380/006/571/8592/front_en.3.400.jpg", text: ""  },
{ id: 3, name: 'product3', img: "https://sibuchocolate.com/wp-content/uploads/2019/12/Sugar-Free-Chocolate.jpg", text: ""  }
];

function SugerFree() {

  return (
    <div>
      <div className="sugerfree">
        <h1>Suger Free</h1>
        <div className='sugerfree__product'>
          {sugerFreeProducts.map((product: ProductProps, i) => {
            return <ProductCard key={i} name={product.name} id={product.id} img={product.img} text={product.text}/>
          })}
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default SugerFree;