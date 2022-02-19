import Product, {productProp} from '../../components/products/Products' 
import {Link} from 'react-router-dom'
import './Cart.scss'
import Navbar from '../../components/navbar/Navbar';

interface cartProps{
    product:any;
    setProduct:any;
}

function Cart(props:cartProps){
    const {product,setProduct}=props;
    console.log(product)
    return (
        
           
      <div className="cart">
            <header className="cart_header">
            <img className="cart_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt=""  />
           <Navbar></Navbar>
         <h1 >cart</h1>
            <div className="cart_header_cart">
             <Link to='/cart'>
                <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
                      </Link>
             </div>
                 </header>
              <div className="cart_body">
                  <div className="cart_body_grid">
                      <div className="item">Product</div>
                      <div className="item">Quantity</div>
                      <div className="item">Item Price</div>
                      <div className="item">Total Price</div>

                      </div>
    
                 {product.map((products:productProp, i:any)=>{
                   
                return  <Product key={i} woodName={products.woodName} woodlength={products.woodlength} width={products.width} thick={products.thick} amount={products.amount} product={product} setProduct={setProduct} />
    })}
    
    
    </div>
            </div>
        );
      
    
}

export default Cart 