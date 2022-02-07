 interface item {
    id : number;
    name : string;
    price: number;
 }
  
 function priceSort(arr: Array<item>, type: string): Array<item> {
    const newArray = Object.assign([], arr); //shallow copy
    if (type == "price") {
        newArray.sort((a, b)=> {
            return a.price - b.price;
        })
    }
    else {
        newArray.sort(function (a, b) {
            return ('' + a.name).localeCompare(b.name);
        })
    }
    return newArray;
  }

  function priceFilter(arr: Array<item>, from: number, to: number): Array<item> {
    const newArray = arr.filter((item: item) => {
        if (item.price >= from && item.price <= to){
            return item;
          }
        })
    return newArray;
   }

   function toUpperCase(arr: Array<item>): Array<item> {
    const newArray = arr.map((item: item) => {
        item.name = item.name.toUpperCase();
        return item;
        })
    return newArray;
   }

   function deleteFilter(arr: Array<item>, id: number): Array<item> {
    const newArray = arr.filter((item: item) => {
        if (item.id != id){
            return item;
          }
        })
    return newArray;
   }

   function updatePrice(arr: Array<item>, id:number, newPrice: number): Array<item> {
    const newArray = arr.map((item: item) => {
        if(item.id == id){
            item.price = newPrice;
        }
        return item;
        })
    return newArray;
   }

  let items: Array<item> = [{id:1, name:"jeans", price:200},
                            {id:2, name:"coat", price:400},
                            {id:3, name:"jacket", price:350},
                            {id:4, name:"shirt", price:200}];


  console.log(items);
  console.log(priceSort(items, "price"));
  console.log(priceSort(items, "name"));
  console.log(priceFilter(items, 150, 300));
  console.log(toUpperCase(items));
  console.log(deleteFilter(items, 2));
  console.log(updatePrice(items, 2,500));
  console.log(updatePrice(items, 3,500));
