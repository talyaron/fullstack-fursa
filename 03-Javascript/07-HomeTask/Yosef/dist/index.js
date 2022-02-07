var CarArr = [
    { name: "Fish", price: 200, id: 1 },
    { name: "Chicken", price: 100, id: 2 },
    { name: "Pizza", price: 50, id: 3 },
    { name: "Sushi", price: 130, id: 4 },
    { name: "Hamburger", price: 300, id: 5 },
    { name: "Salad", price: 120, id: 6 },
    { name: "Lasanga", price: 150, id: 7 }
];
function SortByType(arr, type) {
    var newArr = Object.assign([], arr);
    if (type == "price") {
        newArr.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    else {
        newArr.sort(function (a, b) {
            return ('' + a.name).localeCompare(b.name);
        });
    }
    return newArr;
}
console.log("Sorting the Food by thier price");
console.log(SortByType(CarArr, "price"));
console.log("Sorting the Food by thier name");
console.log(SortByType(CarArr, "name"));
function FilterByPrice(arr, from, to) {
    var FilterArr = arr.filter(function (a) {
        if (a.price >= from && a.price <= to)
            return a;
    });
    return FilterArr;
}
console.log("Sorting the prices in range 200 and 700");
console.log(FilterByPrice(CarArr, 200, 700));
function ToUpperCaseNames(arr) {
    var uppercased = arr.map(function (a) {
        a.name = a.name.toUpperCase();
        return a;
    });
    return uppercased;
}
console.log("Names to uppercase");
console.log(ToUpperCaseNames(CarArr));
function DeleteItemById(arr, id) {
    var Deleted = arr.map(function (a) {
        if (a.id != id)
            return a;
    });
    return Deleted;
}
console.log("Delete item with id equals to 5");
console.log(DeleteItemById(CarArr, 5));
function UpdateNewPrice(arr, id, NewPrice) {
    var NewArr = arr.map(function (a) {
        if (a.id == id)
            a.price = NewPrice;
        return a;
    });
    return NewArr;
}
console.log("update the price of id 3 to 400");
console.log(UpdateNewPrice(CarArr, 3, 400));
