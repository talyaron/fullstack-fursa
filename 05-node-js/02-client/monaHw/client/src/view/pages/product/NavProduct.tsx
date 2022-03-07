import {useParams} from 'react-router-dom';
import Product from './Product';
import Door from "../woodProduct/Door";
import Closet from "../woodProduct/Closet";
import BedFrame from '../woodProduct/BedFrame';

const NavProduct = () => 
{
    const {woodproname} = useParams();

    if(woodproname=='Doors'){

        return (
            
          <div className='door'>
              <Door></Door>
             </div>
        )}
        else if(woodproname=='Closets'){
          return ( 
                   <div>
                    <Closet></Closet>
                   </div>
                  
            )
        }
        else{
            return(
                <div>
                    <BedFrame></BedFrame>
                </div>
            )
        }
}
export default NavProduct;