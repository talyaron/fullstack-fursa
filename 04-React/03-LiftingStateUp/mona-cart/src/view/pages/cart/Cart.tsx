
import Product2, {productProp} from '../../components/product2/Product2' 

interface cartProps{
    products:any;
    setProducts:any;
}

function Cart(props:cartProps){
    const {products,setProducts}=props
    return(
       
        <div>
             <h1> cart</h1>
             {products.map((product:productProp, i:any)=>{

return  <Product2 key={i} name={product.name} product={products} setProduct={setProducts} />
})}
        </div>
    );

}

export default Cart;