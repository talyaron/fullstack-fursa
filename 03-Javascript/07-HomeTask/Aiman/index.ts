interface courses {
  name: string;
  price: number;
  language: string;
  online?: boolean;
  id: number;
}
const arr: Array<courses> = [
  { name: "OOP", price: 230, language: "EN", id: 1022 },
];
const list: Array<string> = ["Datascience", "Datastructure", "Algorithms"];
// added to the array
for (var i = 0; i < 3; i++) {
  arr.push({
    name: list[i],
    price: 230 * (i + 1),
    language: "EN",
    id: 1022 + i,
  });
}
console.log(arr);
//create a function for sorting according to price or name (all functions are pure functions)
function sort_by_price(arr: Array<courses>): Array<courses> {
  const prices: Array<courses> = [...arr];
  return prices.sort((a: courses, b: courses) => {
    return a.price - b.price;
  });
}

const sort: Array<courses> = sort_by_price(arr);
console.log("Sort function");
console.log(sort);
console.log(arr);

// filter by price function
function filter_by_price(arr: Array<courses>, price: number): Array<courses> {
  const copy: Array<courses> = [...arr];
  return copy.filter((a: courses) => {
    return a.price <= price;
  });
}
const prices: Array<courses> = filter_by_price(arr, 600);
console.log("Filter function");
console.log(prices);
console.log(arr);

// function to map letters to capital
function map_to_capital(arr: Array<courses>): Array<courses> {
  const copy: Array<courses> = arr.map((a: courses) => {
    return { ...a, name: a.name.toUpperCase() };
  });
  return copy;
}
const capital: Array<courses> = map_to_capital(arr);
console.log("Map function");
console.log(capital);
console.log(arr);
//function to delete_items
function delete_item(arr: Array<courses>, id: number): Array<courses> {
  const copy: Array<courses> = [...arr];
  return copy.filter((a: courses) => {
    return a.id !== id;
  });
}
const number = 1024;
const deleted: Array<courses> = delete_item(arr, number);
console.log("Delete function");
console.log(deleted);
console.log(arr);

// function to update price
function update_price(
  arr: Array<courses>,
  id: number,
  price: number
): Array<courses> {
  const copy: Array<courses> = [...arr];
  return copy.map((a: courses) => {
    a.id === id ? (a.price = price) : (a.price = a.price);
    return a;
  });
}

const price = 100;
const updated_prices: Array<courses> = update_price(arr, number, price);
console.log("Update price function");
console.log(updated_prices);
console.log(arr);
