import React from 'react'
import './store.scss';
import { Link } from 'react-router-dom';
import ProductCard from './productCard'
import { ProductProps } from './productCard';
import Search from '../components/Search'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const products = [
    { id: 1, name: 'Utility Bench', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/21FGEUFGPRTLTYBNCWGH_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1', cartItems: '', setcartItems: '' },
     { id: 2, name: 'Power Tower', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/21FGEUFGPRPWRTWRXMEC?$DSG_ProductCard$', cartItems: '', setcartItems: '' },
      { id: 3, name: 'Triceps Rope', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/16FGEUTRCPRPXXXXXWBA?$DSG_ProductCard$', cartItems: '', setcartItems: '' },
      { id: 4, name: 'Stack', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/20MCYA150LBSTCKHMGMU?$DSG_ProductCard$', cartItems: '', setcartItems: '' },
      { id: 5, name: 'Standard Bench', img: 'https://images.dickssportinggoods.com/is/image/dkscdn/16WEIUWDRPR265CMBWGH_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1', cartItems: '', setcartItems: '' },
       { id: 6, name: 'Whey Protein', img: 'https://s3.images-iherb.com/msf/msf71702/v/33.jpg', cartItems: '', setcartItems: '' },
       { id: 7, name: 'NITRO', img: 'https://s3.images-iherb.com/msc/msc70328/v/37.jpg', cartItems: '', setcartItems: '' },
       { id: 8, name: 'Blender Shaker', img: 'https://s3.images-iherb.com/sds/sds05723/v/4.jpg', cartItems: '', setcartItems: '' },   
    ];
interface cartprop {
    cartItems: any;
    setcartItems: any;
}

function Store(prop: cartprop) {
    return (
      
      <div className="store">
        <Search title = "search from the store" items={meals}/>
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
          <Button sx={{fontSize:20 , textDecoration: 'none' , height:50}} variant="outlined" startIcon={<ShoppingCartIcon />}>
            Check Your Cart{" "}
          </Button>
        </Link>
      </div>
    );
}

export default Store;

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