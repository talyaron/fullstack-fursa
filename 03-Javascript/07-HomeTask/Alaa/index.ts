// {name, price, id} the id should be unique to each product.
interface items {
  name: string;
  price: number;
  id: number;
}

const arr: Array<items> = [{ name: "kinder", price: 230, id: 1111 }];

const list: Array<string> = ["iphone", "air pods", "scren"];
// added to the array
for (var i = 0; i < 3; i++) {
  arr.push({
    name: list[i],
    price: 230 * (i + 1),
    id: 1111 + i,
  });
}
console.log(arr);

//create a function for sorting according to price or name
function sort_by_price(arr: Array<items>): Array<items> {
  const prices: Array<items> = [...arr];
  return prices.sort((a: items, b: items) => {
    return a.price - b.price;
  });
}

const sort: Array<items> = sort_by_price(arr);
console.log(sort);
console.log(arr);

//create a function a map function that converts all letters of a name to capital letters
function map_to_capital(arr: Array<items>): Array<items> {
  const copy: Array<items> = arr.map((a: items) => {
    return { ...a, name: a.name.toUpperCase() };
  });
  return copy;
}
const capital: Array<items> = map_to_capital(arr);
console.log(capital);
console.log(arr);

// create a function for a filter by price
function filter_by_price(arr: Array<items>, price: number): Array<items> {
  const copy: Array<items> = [...arr];
  return copy.filter((a: items) => {
    return a.price <= price;
  });
}
const prices: Array<items> = filter_by_price(arr, 600);
console.log(prices);
console.log(arr);

//create a function with filter to delete an item by id
function delete_item(arr: Array<items>, id: number): Array<items> {
  const copy: Array<items> = [...arr];
  return copy.filter((a: items) => {
    return a.id !== id;
  });
}
const number = 1024;
const deleted: Array<items> = delete_item(arr, number);
console.log(deleted);
console.log(arr);
