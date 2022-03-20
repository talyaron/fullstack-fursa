export interface ordersProp{
        _id:string
        date:Date,
        paymentMethod:string,
        orderCollection:string
    
}

export function UserOrdersComp(props:ordersProp)
{
    const {_id,date,paymentMethod,orderCollection}=props
  return( 
  
      <div>{_id}   {date}   {paymentMethod} {orderCollection}
      
      </div>
  )
}