enum item {
  milk = "milk",
  eggs = "eggs",
  bread = "bread",
  cola = "cola",
}

interface itemAndPrice {
  item:item;
  price:number;
}

interface bag {
  items:Array<itemAndPrice>;
}


class pourchase {
  mybag:bag;

  constructor() {
    this.mybag = {items:[]}
    this.mybag.items = [];
  }

addItem(it:item,itPrice:number,quantity:number)
{
    try{
      if(it in item){
      let signleItem:itemAndPrice = {item:it,price:itPrice}
      for(let i = 0;i<quantity; i++)
      {
      this.mybag.items.push(signleItem);
      }
      }
      else{
      throw new Error("item no exist");
      }
}
  catch (err) {
    console.error(err);
  }
}
printItems()
{
  for (var product of this.mybag.items) {
    console.log(product.item,product.price,"\n");
    
}

}
}
console.log("crating class");

const newPourchase = new pourchase();

console.log("adding items");

newPourchase.addItem(item.bread,13,1);
newPourchase.addItem(item.cola,18,1);
newPourchase.addItem(item.bread,12,1);
console.log("printing all items");
newPourchase.printItems();

