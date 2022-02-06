interface Product{
    name: string;
    price: number;
    id: number;
  }



const productArr : Array<Product> =[{name:"skirt",price:20,id:1},
{name:"pants",price:30,id:2},{name:"shirt",price:25,id:3}];


function sortbyPrice(arr:Array<Product>){
  const sortedArr = Object.assign([], arr);
  const sortByPrice:Array<Product> = sortedArr.sort((a:Product, b:Product)=>a.price > b.price ? 1 : -1);
  return sortByPrice ;
}  

function sortbyName(arr:Array<Product>){
  const sortedArray = Object.assign([], arr);
  const sortByName:Array<Product> = sortedArray.sort((a:Product, b:Product)=>a.name > b.name ? 1 : -1);
  return sortByName ;
}  


function filterbyPrice(arr:Array<Product>,from:number,to:number){
  const filteredArray = Object.assign([], arr);
  const filterByPrice:Array<Product> = filteredArray.filter((a:Product)=>a.price>from && a.price<to );
  return filterByPrice ;
}


function maptoCapital(arr:Array<Product>){
  const mapedArray = Object.assign([], arr);
  const mapToCapital:Array<Product> = mapedArray.map((a:Product)=>{
    //a.name=a.name.toUpperCase(); 
    //return a ;
    return {...a, name: a.name.toUpperCase()};
  });
  return mapToCapital ;
}

function deletebyId(arr:Array<Product>,val:number){
  const updatedArray = Object.assign([], arr);
  const update:Array<Product> = updatedArray.filter((a:Product)=>{
    if(a.id!=val)
      return a ;
  });
  return update ;
}


function updatePrice(arr:Array<Product>,newPrice:number,val:number){
  const updatedArray = Object.assign([], arr);
  const update:Array<Product> = updatedArray.map((a:Product)=>{
    if(a.id==val)
      return {...a, price: newPrice};
    return a;
  });
  return update ;
}


console.log(productArr);
console.log(sortbyPrice(productArr));
console.log(sortbyName(productArr));
console.log(filterbyPrice(productArr,20,30));
console.log(deletebyId(productArr,3));
console.log(maptoCapital(productArr));
console.log(updatePrice(productArr,555,1));
console.log(productArr);


