
import "./ProductCard.scss"
import{Link} from 'react-router-dom'
export interface ProductCardProp {
   
    product:{
        id:number,
        name: string,
        imgurl:string,
       
        };
    
  }
function ProductCard(props:ProductCardProp)
{ 
    const {name,imgurl,id}=props.product;
   
    return(
        <div className="proCard">
          <img src={imgurl} alt="" />
          <div className="proCard_link">
         
            <Link to={`/woodProduct/${name}`} >{name}</Link>
            
          </div>
        </div>

    );
}

export default ProductCard;