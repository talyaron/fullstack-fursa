
import { Link } from "react-router-dom";
import "./Products.scss";
export interface ProductProps{
    id:number;
    name:string;
    image:string;
}

function Products(prop:ProductProps){
    const {id,name,image}=prop;
    return(
    
    
    <div className="product">
        <img src={image}></img>
        <div className="product_link">
        <Link to={`/product/${id}`}>{name}</Link>
        </div>
    </div>
     
        
    );
}

export default Products