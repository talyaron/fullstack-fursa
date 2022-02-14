import { Link } from "react-router-dom";
import "./Product.scss";

export interface ProductProps {
  name: string;
  id: number;
  quantity:number;
  price:number;
  src:string;
}
const Product = (props: ProductProps) => {
  const { name, id ,quantity,price,src} = props;

  return (
    <Link to={`/store/${id}`}>
      <div className="product">{name} <img src={src}></img></div>
      
    </Link>
  );
};

export default Product;
