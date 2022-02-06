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
var productArr = [{ name: "skirt", price: 20, id: 1 },
    { name: "pants", price: 30, id: 2 }, { name: "shirt", price: 25, id: 3 }];
function sortbyPrice(arr) {
    var sortedArr = Object.assign([], arr);
    var sortByPrice = sortedArr.sort(function (a, b) { return a.price > b.price ? 1 : -1; });
    return sortByPrice;
}
function sortbyName(arr) {
    var sortedArray = Object.assign([], arr);
    var sortByName = sortedArray.sort(function (a, b) { return a.name > b.name ? 1 : -1; });
    return sortByName;
}
function filterbyPrice(arr, from, to) {
    var filteredArray = Object.assign([], arr);
    var filterByPrice = filteredArray.filter(function (a) { return a.price > from && a.price < to; });
    return filterByPrice;
}
function maptoCapital(arr) {
    var mapedArray = Object.assign([], arr);
    var mapToCapital = mapedArray.map(function (a) {
        //a.name=a.name.toUpperCase(); 
        //return a ;
        return __assign(__assign({}, a), { name: a.name.toUpperCase() });
    });
    return mapToCapital;
}
function deletebyId(arr, val) {
    var updatedArray = Object.assign([], arr);
    var update = updatedArray.filter(function (a) {
        if (a.id != val)
            return a;
    });
    return update;
}
function updatePrice(arr, newPrice, val) {
    var updatedArray = Object.assign([], arr);
    var update = updatedArray.map(function (a) {
        if (a.id == val)
            return __assign(__assign({}, a), { price: newPrice });
        return a;
    });
    return update;
}
console.log(productArr);
console.log(sortbyPrice(productArr));
console.log(sortbyName(productArr));
console.log(filterbyPrice(productArr, 20, 30));
console.log(deletebyId(productArr, 3));
console.log(maptoCapital(productArr));
console.log(updatePrice(productArr, 555, 1));
console.log(productArr);
