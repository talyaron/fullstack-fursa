import { Link } from "react-router-dom";
import "./Product.scss";

export interface ProductProps {
  name: string;
  id: number;
  img:string;
}
const Product = (props: ProductProps) => {
  const { name, id, img } = props;

  return (
    <Link to={`/product/${id}`}>
      <div className="product">{name}</div>
    </Link>
  );
};

export default Product;