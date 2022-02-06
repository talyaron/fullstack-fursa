
var min:number = 0;
var max:number = 0;

interface item {
  itemId: number;
  name : string;
  quantity:number;
  price:number;
  description:string;
}

function getId() {
  if(min == 0) return ++max;
  else return --min;
}
 
function AddItem(arr: Array<item>,newName : string,newPrice:number, newQuantity:number, newDescription:string) {

  var newItem:item = {itemId:getId(),name:newName,quantity:newQuantity,price:newPrice,description:newDescription};
  arr.push(newItem);
}

var items :Array<item> = [];
AddItem(items,"bread",15,14,"something to eat");
AddItem(items,"COOKEI",1,29,"sweets");
AddItem(items,"cola",2,1,"drink");
AddItem(items,"milk",3,9,"cow juice");
AddItem(items,"protein",200,200,"get shreded");
AddItem(items,"creatine",2,80,"muscle juice");

const soretedItems:Array<item> = items.sort((it1:item,it2:item)=>{
  return it1.price - it2.price;
})

console.log("sorted items by price:",soretedItems);

const QuantityOverFifty:Array<item> = items.filter((it:item)=>{
  return (it.quantity <30 && it.quantity > 1)
})
console.log("filter quantity over 50:",QuantityOverFifty);

const mapArray:Array<item> = items.map((it:item)=>{
  it.name = it.name.toUpperCase();
  return it;
})

console.log("changing name to uppercase",mapArray);








