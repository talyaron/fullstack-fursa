import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getProductByTypeAsync } from "../../../features/product/productReducer";
import { getRelatedProduct } from "../../../features/product/relatedProductReducer";
import Navbar from "../../components/navbar/Navbar";
import ScrewCard from "../../components/screw/ScrewCard";
import './Screw.scss'
function Screw()
{
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getProductByTypeAsync('screws'))

    },[])
    const products=useAppSelector(getRelatedProduct);

return(
    <div className="Screw">
    <header className='Screw_header'>
   <img className="Screw_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ye9yqhumfloAX9j7uvt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-zBFq4ugSSvtQCdFkGcWIcgyV86E_gH8OVLGhZzFZLFQ&oe=625C6720" alt="" />
   <Navbar></Navbar>
   <h1 >Screws</h1>
   <div className="Screw_header_cart">
     <Link to='/cart'>
   <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
     </Link>
      </div>
      
      </header> 
     
      <div className="RawMaterial_body">
     
      {products.status!=='loading'?
        products.productArray.map((product, index)=>{
          const{name,price}=product;
          return <ScrewCard key={index} product={{name,price}}/>
          
        }):<div><CircularProgress color="secondary" />
        </div>}

      </div>
    
    </div>
    

)

}

export default Screw;