
import "./ProductCard.scss"
import{Link} from 'react-router-dom'
export interface ProductCardProp {
   
    product:{
        name: string,
        imgurl:string,
       
        };
    
  }
function ProductCard(props:ProductCardProp)
{ 
    const {name,imgurl}=props.product;
   
    return(
        <div className="proCard">
          <div className="proCard_image">
          <img src={imgurl} alt="" />
          </div>
          <div className="proCard_link">
            <Link to={`/woodProduct/${name}`} >{name}</Link>
          </div>
        </div>

    );
}

export default ProductCard;