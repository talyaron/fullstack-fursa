import React from 'react';
import "./productCard.scss";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
export interface ProductProps {
    name: string;
    id: number;
    img: string;
    cartItems: any;
    setcartItems: any;
}

function ProductCard(props: ProductProps) {
    const { name, id, img } = props;
    const { cartItems, setcartItems } = props;
    function add_item() {
        let copy = Object.assign([], cartItems);
        copy.push({ name: name, id: id, img: img })
        setcartItems(copy)
        alert(props.name + " have been added to the cart");
    }
    return (
      <div className="card">
        <img src={img}></img>
        <span className="card__Title">{name}</span>
        <Button sx={{fontSize:18}}onClick={add_item} variant="contained" startIcon={<AddShoppingCartIcon />}>
          Add to cart
        </Button>
        
      </div>
    );
}
export default ProductCard