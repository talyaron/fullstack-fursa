var items = [
    { name: "shirt", price: 100, id: "1" },
    { name: "jeans", price: 90, id: "2" },
    { name: "hoody", price: 180, id: "3" },
    { name: "jacket", price: 350, id: "4" },
    { name: "pant", price: 70, id: "5" },
    { name: "shoes", price: 120, id: "6" },
];
function SortByPrice(items) {
    var newArr = Object.assign([], items);
    newArr.sort(function (a, b) {
        return a.price - b.price;
    });
    return newArr;
}
function SortByName(items) {
    var newArr = Object.assign([], items);
    newArr.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    return newArr;
}
function ToCapital(items) {
    var newArr = Object.assign([], items);
    var capitalArray = newArr.map(function (x) {
        x.name = x.name.toUpperCase();
        return x;
    });
    return capitalArray;
}
console.log("my items: ");
console.log(items);
console.log("items sorted by Name");
console.log(SortByName(items));
console.log("items sorted by price");
console.log(SortByPrice(items));
console.log("items name capital");
console.log(ToCapital(items));
