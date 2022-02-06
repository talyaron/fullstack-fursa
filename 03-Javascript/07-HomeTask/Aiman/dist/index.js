var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr = [
    { name: "OOP", price: 230, language: "EN", id: 1022 },
];
var list = ["Datascience", "Datastructure", "Algorithms"];
// added to the array
for (var i = 0; i < 3; i++) {
    arr.push({
        name: list[i],
        price: 230 * (i + 1),
        language: "EN",
        id: 1022 + i
    });
}
console.log(arr);
//create a function for sorting according to price or name (all functions are pure functions)
function sort_by_price(arr) {
    var prices = __spreadArrays(arr);
    return prices.sort(function (a, b) {
        return a.price - b.price;
    });
}
var sort = sort_by_price(arr);
console.log("Sort function");
console.log(sort);
console.log(arr);
// filter by price function
function filter_by_price(arr, price) {
    var copy = __spreadArrays(arr);
    return copy.filter(function (a) {
        return a.price <= price;
    });
}
var prices = filter_by_price(arr, 600);
console.log("Filter function");
console.log(prices);
console.log(arr);
// function to map letters to capital
function map_to_capital(arr) {
    var copy = arr.map(function (a) {
        return __assign(__assign({}, a), { name: a.name.toUpperCase() });
    });
    return copy;
}
var capital = map_to_capital(arr);
console.log("Map function");
console.log(capital);
console.log(arr);
//function to delete_items
function delete_item(arr, id) {
    var copy = __spreadArrays(arr);
    return copy.filter(function (a) {
        return a.id !== id;
    });
}
var number = 1024;
var deleted = delete_item(arr, number);
console.log("Delete function");
console.log(deleted);
console.log(arr);
// function to update price
function update_price(arr, id, price) {
    var copy = __spreadArrays(arr);
    return copy.map(function (a) {
        a.id === id ? (a.price = price) : (a.price = a.price);
        return a;
    });
}
var price = 100;
var updated_prices = update_price(arr, number, price);
console.log("Update price function");
console.log(updated_prices);
console.log(arr);
