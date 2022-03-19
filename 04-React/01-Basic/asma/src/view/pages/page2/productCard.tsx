import "./productCard.scss";

export interface ProductProps {
    setState:any;
    state:any;
}

interface Product{
    name: string;
    count: number;
    id: number;
  }

function ProductCard(props: ProductProps){

    function deletebyId(arr:Array<Product>,val:number){
        const updatedArray = Object.assign([], arr);
        const update:Array<Product> = updatedArray.filter((a:Product)=>{
          if(a.id!=val)
            return a ;
        });
        return update ;
      }

    function updateCount(arr:Array<Product>,id:number,count:number){
        const updatedArray = Object.assign([], arr);  
        if(count==1)  
            return deletebyId(updatedArray,id) ;
        const update:Array<Product> = updatedArray.map((a:Product)=>{
             if(a.id==id){ 
                 if(a.count!=1){
                     return {...a, count: a.count-1};
                    }
             }
             return a;
        });
        return update;
      }
   
    function handleRemove(id:number,count:number) {
        setState(updateCount(state,id,count));        
    }

    let {state,setState} = props;
    return(
        <div className="card">
            {state.map((product:Product) => {
                return  (
                    <div className="card__item">
                    <span className="card__item__title">Product Name: {product.name}</span>
                    <span className="card__item__title"> Amount: {product.count}</span>
                    <button onClick={() => handleRemove(product.id,product.count)}>Remove</button>
                </div>
                )
            })}
        </div>
    )
}

export default ProductCard;