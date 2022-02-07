function priceSort(arr, type) {
    var newArray = Object.assign([], arr); //shallow copy
    if (type == "price") {
        newArray.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    else {
        newArray.sort(function (a, b) {
            return ('' + a.name).localeCompare(b.name);
        });
    }
    return newArray;
}
function priceFilter(arr, from, to) {
    var newArray = arr.filter(function (item) {
        if (item.price >= from && item.price <= to) {
            return item;
        }
    });
    return newArray;
}
function toUpperCase(arr) {
    var newArray = arr.map(function (item) {
        item.name = item.name.toUpperCase();
        return item;
    });
    return newArray;
}
function deleteFilter(arr, id) {
    var newArray = arr.filter(function (item) {
        if (item.id != id) {
            return item;
        }
    });
    return newArray;
}
function updatePrice(arr, id, newPrice) {
    var newArray = arr.map(function (item) {
        if (item.id == id) {
            item.price = newPrice;
        }
        return item;
    });
    return newArray;
}
var items = [{ id: 1, name: "jeans", price: 200 },
    { id: 2, name: "coat", price: 400 },
    { id: 3, name: "jacket", price: 350 },
    { id: 4, name: "shirt", price: 200 }];
console.log(items);
console.log(priceSort(items, "price"));
console.log(priceSort(items, "name"));
console.log(priceFilter(items, 150, 300));
console.log(toUpperCase(items));
console.log(deleteFilter(items, 2));
console.log(updatePrice(items, 2, 500));
console.log(updatePrice(items, 3, 500));
