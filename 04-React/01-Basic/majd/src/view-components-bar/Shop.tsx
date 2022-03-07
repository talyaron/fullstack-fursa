import React from 'react';
//import items from '../items';
//import Product from '../Product';



interface It {
    id: string;
    Name: string;
    price: number;
  }
function Shop(prop:any| undefined){
     const{ onAdd } = prop;
     const item1= "item1"
     const item2= "item2"
    return (
        <div className="row">
        <div><h3> item1</h3> <button className='mb-1' onClick={()=> onAdd(item1)}> add </button></div>
        <div> <h3> item2</h3> <button className='mb-1'> add</button></div>
         </div>
  );

  }

export default Shop;