import React from 'react';

 function Product(props:any) {
  const { product, onAdd } = props;
  return (
    <div>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;