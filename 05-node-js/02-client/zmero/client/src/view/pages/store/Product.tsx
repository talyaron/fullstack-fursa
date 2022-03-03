import { Link } from "react-router-dom";
import React from 'react'
import "./Product.scss";

export interface ProductProps {
  name: string;
  id: number;
}
const Product = (props: ProductProps) => {
  const { name, id } = props;

  return (
    <Link to={`/store/${id}`}>
      <div className="product">{name}</div>
    </Link>
  );
};

export default Product;
