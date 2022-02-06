interface Item {
  id: number;
  name: string;
  price: number;
}

const arr: Array<Item> = [
  { name: "t-shirt", id: 1, price: 90 },
  { name: "dress ", id: 2, price: 20 },
  { name: "jeans ", id: 3, price: 70 },
  { name: "sweater ", id: 4, price: 40 },
  { name: "suit", id: 5, price: 50 },
  { name: "skirt", id: 6, price: 30 },
];
console.log("Orginal array");
console.log(arr);
//create a function for sorting according to price
function priceSort(arr: Array<Item>): Array<Item> {
  const newArray: Array<Item> = [...arr];
  newArray.sort((a: Item, b: Item) => {
    return a.price - b.price;
  });
  return newArray;
}
console.log("pricesort");
console.log(priceSort(arr));

//create a function for sorting according to name
function nameSort(arr: Array<Item>): Array<Item> {
  const newArray: Array<Item> = [...arr];
  return newArray.sort((a: Item, b: Item) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });
}
console.log("namesort");
console.log(nameSort(arr));

// create a function for a filter by price (from -> to)
function filterbyPrice(
  arr: Array<Item>,
  from: number,
  to: number
): Array<Item> {
  const newArray: Array<Item> = [...arr];
  return newArray.filter((a: Item) => {
    return a.price <= to && a.price >= from;
  });
}
//const arr3:Array<Item>=filterbyPrice(arr,20,40);
console.log("filterbyPrice");
console.log(filterbyPrice(arr, 20, 40));

// create a function a map function that converts all letters of a name to capital letters
function upperletter(arr: Array<Item>): Array<Item> {
  const newarray: Array<Item> = arr.map((a: Item) => {
    return { ...a, name: a.name.toUpperCase() };
  });

  return newarray;
}
console.log("upperlette");
console.log(upperletter(arr));

// create a function with filter to delete an item by id
function deleteItem(arr: Array<Item>, id: number): Array<Item> {
  const newArray: Array<Item> = [...arr];
  return newArray.filter((a: Item) => {
    return a.id !== id;
  });
}
console.log("deleteItem");
console.log(deleteItem(arr, 2));

function updateprice(arr: Array<Item>, id: number, price: number): Array<Item> {
  const newArray: Array<Item> = arr.map((a: Item) => {
    if (a.id == id) return { ...a, price: price };
    return a;
  });
  return newArray;
}
console.log("updateprice");
console.log(updateprice(arr, 2, 34));
