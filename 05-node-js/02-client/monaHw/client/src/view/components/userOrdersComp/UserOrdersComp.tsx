export interface ordersProp{
        _id:string
        date:Date,
        cash:boolean,
        creditCard:boolean,
        delivery:boolean,
        pickUp:boolean,
    
}

export function UserOrdersComp(props:ordersProp)
{
    const {_id,date,cash,creditCard,delivery,pickUp}=props
  return(
    
      <div>{_id} {date} //// {cash}/// {creditCard}/// {delivery} {pickUp}</div>
  )
}