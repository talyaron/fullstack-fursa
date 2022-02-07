var arr = [
    { name: 't-shirt', price: 50, id: 1 },
    { name: 'jacket', price: 150, id: 2 },
    { name: 'short', price: 80, id: 3 },
    { name: 'shirt', price: 40, id: 4 }
];
arr.forEach(function (item) {
    console.log(item);
});
// const filterprice:Array<Item> = arr.filter((item:Item)=>{
//     return item.price<100 && item.price>50;
// })
function filterprice(arr) {
    var filteredArr = Object.assign([], arr);
    var filterByPrice = filteredArr.filter(function (item) { return item.price < 100 && item.price > 50; });
    return filterByPrice;
}
// const sortByPrice:Array<Item> = arr.sort((a:Item, b:Item)=>{
//     return b.price - a.price;
// })
function sortByPrice(arr) {
    var sortedArr = Object.assign([], arr);
    var sortByPrice = sortedArr.sort(function (a, b) { return b.price - a.price; });
    return sortByPrice;
}
var uppercase = arr.map(function (item) {
    var s = item.name.toUpperCase();
    item.name = s;
    return item;
});
function Touppercase(arr) {
    var uppercaseArr = Object.assign([], arr);
    var Touppercase = uppercaseArr.map(function (item) {
        var s = item.name.toUpperCase();
        item.name = s;
        return item;
    });
    return Touppercase;
}
function deleteitembyid(arr) {
    var newArr = Object.assign([], arr);
    var givenid = 2;
    var deleteitembyid = newArr.filter(function (item) {
        return item.id != givenid;
    });
    return deleteitembyid;
}
// const deleteitembyid:Array<Item> = arr.filter((item:Item)=>{
//     const arr:Array<Item>=Object.assign([],item)
//     const givenid=2;
//     return item.id!=givenid;
// })
console.log(filterprice(arr));
console.log(sortByPrice(arr));
console.log(uppercase);
console.log(Touppercase(arr));
console.log(deleteitembyid(arr));
