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
function priceSort(arr) {
    var newArray = __spreadArrays(arr);
    newArray.sort(function (a, b) {
        return a.price - b.price;
    });
    return newArray;
}
console.log("pricesort");
console.log(priceSort(arr));
//create a function for sorting according to name
function nameSort(arr) {
    var newArray = __spreadArrays(arr);
    return newArray.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        else {
            return 1;
        }
        return 0;
    });
}
console.log("namesort");
console.log(nameSort(arr));
// create a function for a filter by price (from -> to)
function filterbyPrice(arr, from, to) {
    var newArray = __spreadArrays(arr);
    return newArray.filter(function (a) {
        return a.price <= to && a.price >= from;
    });
}
//const arr3:Array<Item>=filterbyPrice(arr,20,40);
console.log("filterbyPrice");
console.log(filterbyPrice(arr, 20, 40));
// create a function a map function that converts all letters of a name to capital letters
function upperletter(arr) {
    var newarray = arr.map(function (a) {
        return __assign(__assign({}, a), { name: a.name.toUpperCase() });
    });
    return newarray;
}
console.log("upperlette");
console.log(upperletter(arr));
// create a function with filter to delete an item by id
function deleteItem(arr, id) {
    var newArray = __spreadArrays(arr);
    return newArray.filter(function (a) {
        return a.id !== id;
    });
}
console.log("deleteItem");
console.log(deleteItem(arr, 2));
function updateprice(arr, id, price) {
    var newArray = arr.map(function (a) {
        if (a.id == id)
            return __assign(__assign({}, a), { price: price });
        return a;
    });
    return newArray;
}
console.log("updateprice");
console.log(updateprice(arr, 2, 34));
