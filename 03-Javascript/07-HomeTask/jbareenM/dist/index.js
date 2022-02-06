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
var items = [
    { id: 1, price: 50, name: "shirt" },
    { id: 2, price: 20, name: "pants" },
    { id: 3, price: 30, name: "jacket" },
    { id: 4, price: 40, name: "pants 1" },
];
function sortByPriceOrName(items, sortBy) {
    var copyItems = Object.assign([], items);
    if (sortBy === "name") {
        var sortedItems_1 = copyItems.sort(function (first, second) {
            if (first.name > second.name)
                return 1;
            else if (first.name < second.name)
                return -1;
            return 0;
        });
        return sortedItems_1;
    }
    var sortedItems = copyItems.sort(function (first, second) {
        return first.price - second.price;
    });
    return sortedItems;
}
function sortByName(items) {
    var copyItems = Object.assign([], items);
    var sortByName = copyItems.sort(function (first, second) {
        if (first.name > second.name)
            return 1;
        else if (first.name < second.name)
            return -1;
        return 0;
    });
    return sortByName;
}
function sortByPrice(items, direction) {
    var copyItems = Object.assign([], items);
    var sortedItems = copyItems.sort(function (first, second) {
        if (direction == 1)
            return first.price - second.price;
        return second.price - first.price;
    });
    return sortedItems;
}
function filterByPrice(items, from, to) {
    var copyItems = Object.assign([], items);
    var filteredByPrice = copyItems.filter(function (item) {
        return item.price >= from && item.price <= to;
    });
    return filteredByPrice;
}
function converToUpperCase(items) {
    var copyItems = Object.assign([], items);
    var upperCaseItems = copyItems.map(function (item) {
        return __assign(__assign({}, item), { name: item.name.toUpperCase() });
    });
    return upperCaseItems;
}
//--------------Challenge---------------
function deleteById(items, id) {
    var copyItems = Object.assign([], items);
    var deletedId = copyItems.filter(function (item) {
        return item.id !== id;
    });
    return deletedId;
}
function updatePrice(items, newPrice, id) {
    var copyItems = Object.assign([], items);
    var upperCaseItems = copyItems.map(function (item) {
        if (item.id === id)
            return __assign(__assign({}, item), { price: item.price = newPrice });
        return __assign({}, item);
    });
    return upperCaseItems;
}
console.log("sortByPriceOrName name:", sortByPriceOrName(items, "name"));
console.log("sortByPriceOrName price:", sortByPriceOrName(items, "price"));
console.log("sortByName:", sortByName(items));
console.log("sortByPrice small to great", sortByPrice(items, 1));
console.log("sortByPrice great to small", sortByPrice(items, -1));
console.log("filterByPrice:", filterByPrice(items, 10, 30));
console.log("converToUpperCase:", converToUpperCase(items));
console.log("--------------Challenge---------------");
console.log("deleteById:", deleteById(items, 2));
console.log("updatePrice:", updatePrice(items, 200, 2));
console.log(items);
