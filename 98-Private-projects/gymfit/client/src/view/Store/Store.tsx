import React,{useState,useEffect} from 'react'
import './store.scss';
import { Link } from 'react-router-dom';
import ProductCard from './productCard'
import { ProductProps } from './productCard';
// import Search from '../components/Search'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import Menu from '../components/Menu'

const meals = [
  { title: 'Amino Acids' },
  { title: 'Calcioum'},
  { title: 'Colagine'},
  { title: 'Meal relacement'},
  { title: 'Protiens'},
  { title: 'Shakers'},
  { title: 'Dumbbles'},
  { title: 'BCAA'},
  { title: 'WHEY'},
  { title: 'Fitness Gear'},
  { title: 'PowerRack'},
  { title: 'Weider'},
  { title: 'BowFlex'},
  { title: 'Tricep Rope'},
];
// const products = [
//     { id: 1, name: 'Utility Bench', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/21FGEUFGPRTLTYBNCWGH_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1', cartItems: '', setcartItems: '' },
//      { id: 2, name: 'Power Tower', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/21FGEUFGPRPWRTWRXMEC?$DSG_ProductCard$', cartItems: '', setcartItems: '' },
//       { id: 3, name: 'Triceps Rope', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/16FGEUTRCPRPXXXXXWBA?$DSG_ProductCard$', cartItems: '', setcartItems: '' },
//       { id: 4, name: 'Stack', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/20MCYA150LBSTCKHMGMU?$DSG_ProductCard$', cartItems: '', setcartItems: '' },
//       { id: 5, name: 'Standard Bench', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/16WEIUWDRPR265CMBWGH_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1', cartItems: '', setcartItems: '' },
//        { id: 6, name: 'Whey Protein', img: 'https://s3.images-iherb.com/msf/msf71702/v/33.jpg', cartItems: '', setcartItems: '' },
//        { id: 7, name: 'NITRO', img: 'https://s3.images-iherb.com/msc/msc70328/v/37.jpg', cartItems: '', setcartItems: '' },
//        { id: 8, name: 'Blender Shaker', img: 'https://s3.images-iherb.com/sds/sds05723/v/4.jpg', cartItems: '', setcartItems: '' },
//        { id: 9, name: 'dumbble', img: 'data:image/jpeg;base64,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', cartItems: '', setcartItems: ''},   
//     ];
interface cartprop {
    cartItems: any;
    setcartItems: any;
}


function Store(prop: cartprop) {
     const [products,setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3004/products').then(({ data }) => {
        console.log(data);
        setProducts(data);
    }).catch(error => console.log(error))
  },[])
 
    return (
      <div>
        <Menu/>
        <div className="store">
          {/* <Search title="search from the store" items={meals} /> */}
          <h1>Welcome To GymFit Store</h1>
          <div className="store__product">
            {products.map((product: ProductProps, i) => {
              return (
                <ProductCard
                  key={i}
                  name={product.name}
                  id={product.id}
                  img={product.img}
                  cartItems={prop.cartItems}
                  setcartItems={prop.setcartItems}
                />
              );
            })}
          </div>
          <br></br> <br></br> <br></br> <br></br>
          <Link to="/Cart">
            <Button
              sx={{ fontSize: 20, textDecoration: "none", height: 50 }}
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
            >
              Check Your Cart{" "}
            </Button>
          </Link>
        </div>
      </div>
    );
}





export default Store;