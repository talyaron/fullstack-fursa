import {useParams} from 'react-router-dom';
import Product from '../product/Product';
import Door from "./WoodProduct";

function NavProduct()
{
    const {woodproId} = useParams();
    console.log(woodproId)

    if(woodproId=='1'){
        return (
            
          <div className='door'>
             
              <Door></Door>
               
              
            </div>
        )}
        else{
          return (
            
              <div className='products'>
                 
                  
                   
                  
                </div>
            )
        }
}
export default NavProduct;