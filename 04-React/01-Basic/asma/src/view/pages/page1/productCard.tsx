import {Link} from 'react-router-dom';
import React from 'react';
import "./productCard.scss";


export interface ProductProps {
    setState:any;
    state:any;
    name: string;
    id: number;
    img: string;
 
}

interface Product{
    name: string;
    count: number;
    id: number;
  }


function ProductCard(props: ProductProps){

    function updateCount(arr:Array<Product>,id:number,name:string){
        const updatedArray = Object.assign([], arr);
        
        if ( updatedArray.length==0){
            updatedArray.push({name:name,id:id,count:1})
            return updatedArray;
        }
            
        let flag=1;
        const update:Array<Product> = updatedArray.map((a:Product)=>{
             if(a.id===id){ 
                 flag=0;
                 return {...a, count: a.count+1};
             }
             return a;
        });
        if(flag)
            update.push({name:name,id:id,count:1})
        //console.log(update);
        return update;
      }




    function handleAdd() {
        setState(updateCount(state,id,name));
    }

    const { name, id, img ,state,setState} = props;
    return(
        <div className="card">
            <div className="card__item">
                <img src={img}></img>
                <span className="card__item__title">{name}</span>
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>

    )
}

export default ProductCard;