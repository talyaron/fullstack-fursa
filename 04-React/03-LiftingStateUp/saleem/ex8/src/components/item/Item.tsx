import React from 'react';

interface methods{
    index:number;
    add: any;
    remove:any;
    id:number;
    title:string;
    price:string;
    incart:boolean

}
function Item(prop:methods){
    return (
        
        <div key={prop.id} className="col-12 col-sm-12 col-md-4 col-lg-4 pb-2 pt-2">
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://picsum.photos/seed/450/300" className="card-img-top" alt="cartItem" />
          <div className="card-body">
            <h5 className="card-title">{prop.title}</h5>
            <p className="card-text">{prop.price}$</p>
            {
              prop.incart === false ?

                <button className="btn btn-dark" data-id={prop.index} onClick={(event) => prop.add(event)}>Add to Cart</button>
                :

                <button className="btn btn-danger" data-id={prop.index} onClick={(event) => prop.remove(event)}>Remove from cart</button>

            }

          </div>
        </div>
      </div>


      

    )
}

export default Item;