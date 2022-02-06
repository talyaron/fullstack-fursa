var chocolateArr = [
    { id: 1, name: 'kinder', price: 10 },
    { id: 2, name: 'snickers', price: 12 },
    { id: 3, name: 'oreo', price: 7 },
    { id: 4, name: 'nutella', price: 11 },
    { id: 5, name: 'milka', price: 15 },
    { id: 6, name: 'pringles', price: 5 },
    { id: 7, name: 'bounty', price: 20 },
    { id: 8, name: 'galaxy', price: 16 },
    { id: 9, name: 'twix', price: 13 },
    { id: 10, name: 'ferrero', price: 25 }
];
//sort by price
function sortbyprice(chocolateArr) {
    var newArray = Object.assign([], chocolateArr);
    var sortByPrice = newArray.sort(function (c1, c2) {
        return c1.price - c2.price;
    });
    return sortByPrice;
}
//sort by name
function sortbyname(chocolateArr) {
    var newArray = Object.assign([], chocolateArr);
    var sortByName = newArray.sort(function (c3, c4) {
        if (c3 < c4) {
            return 1;
        }
        else if (c3 > c4) {
            return -1;
        }
        else {
            return 0;
        }
    });
    return sortByName;
}
//function that converts all letters of a name to capital letters
function uppercase(chocolateArr) {
    var uppercase = chocolateArr.map(function (ch) {
        var newobj = Object.assign({}, ch);
        newobj.name = newobj.name.toUpperCase();
        return newobj;
    });
    return uppercase;
}
//function for a filter by price (from -> to)
function pricebetween(chocolateArr, from, to) {
    var newArray = Object.assign([], chocolateArr);
    var filterprice = newArray.filter(function (ch) {
        return ch.price > from && ch.price < to;
    });
    return filterprice;
}
// function with filter to delete an item by id
function deletebyid(chocolateArr, id) {
    var newArray = Object.assign([], chocolateArr);
    var filterbyid = newArray.filter(function (ch) {
        return ch.id != id;
    });
    return filterbyid;
}
//function to update price with map, by id
function updtaeprice(chocolateArr, id, newprice) {
    var updatePrice = chocolateArr.map(function (ch) {
        var chobj = Object.assign({}, ch);
        if (chobj.id == id) {
            chobj.price = newprice;
        }
        return chobj;
    });
    return updatePrice;
}
console.log("array sorted by price");
var ar = sortbyprice(chocolateArr);
console.log(ar);
console.log("array sorted by name");
var ar2 = sortbyname(chocolateArr);
console.log(ar2);
console.log("array with upper");
var ar3 = uppercase(chocolateArr);
console.log(ar3);
console.log("array with price between");
var ar4 = pricebetween(chocolateArr, 10, 20);
console.log(ar4);
console.log("array with delete by id");
var ar5 = deletebyid(chocolateArr, 7);
console.log(ar5);
console.log("array with updated price");
var ar6 = updtaeprice(chocolateArr, 7, 30);
console.log(ar6);
console.log('orginal array');
console.log(chocolateArr);
