import {useParams} from 'react-router-dom';
import Product from './Product';
import Door from "../woodProduct/Door";
import Closet from "../woodProduct/Closet";
import BedFrame from '../woodProduct/BedFrame';
import Screw from '../relatedProducts/Screw';

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

        else if(woodproname=='Bed Frame') {
            return(
                <div>
                    <BedFrame></BedFrame>
                </div>
            )
        }
        else  {
            return(
                <div>
                   <Screw></Screw>
                </div>
            )
        }
}
export default NavProduct;