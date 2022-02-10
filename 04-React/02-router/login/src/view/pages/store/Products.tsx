import { Link } from "react-router-dom";
import "./Products.scss";
//component
export interface ProductProp{
    
    id:number;
    name:string;
    image:string;
    price:number;
    
}
function Products(prop:ProductProp){
    const {id,name,image,price}=prop;

    return(
         <Link to={`/store/${id}`}>
      <div className="product">{name} </div>
    </Link>
    );
}
export default Products;