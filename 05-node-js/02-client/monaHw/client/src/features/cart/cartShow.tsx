import { useAppSelector } from "../../app/hooks";
import { selectorders } from "./cartSlice";
import Product,{productProp} from "../../view/components/products/Products";
export default function CartShow()
{
    const orders=useAppSelector(selectorders);
    console.log(orders);

    return (
      
        orders.map((products:productProp,i:any)=>{
            return  <Product key={i} woodName={products.woodName} woodlength={products.woodlength} width={products.width} thick={products.thick} amount={products.amount} id={products.id} />

        })
       
    )
}