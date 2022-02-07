var item;
(function (item) {
    item["milk"] = "milk";
    item["eggs"] = "eggs";
    item["bread"] = "bread";
    item["cola"] = "cola";
})(item || (item = {}));
var pourchase = /** @class */ (function () {
    function pourchase() {
        this.mybag = { items: [] };
        this.mybag.items = [];
    }
    pourchase.prototype.addItem = function (it, itPrice, quantity) {
        try {
            if (it in item) {
                var signleItem = { item: it, price: itPrice };
                for (var i = 0; i < quantity; i++) {
                    this.mybag.items.push(signleItem);
                }
            }
            else {
                throw new Error("item no exist");
            }
        }
        catch (err) {
            console.error(err);
        }
    };
    pourchase.prototype.printItems = function () {
        for (var _i = 0, _a = this.mybag.items; _i < _a.length; _i++) {
            var product = _a[_i];
            console.log(product.item, product.price, "\n");
        }
    };
    return pourchase;
}());
console.log("crating class");
var newPourchase = new pourchase();
console.log("adding items");
newPourchase.addItem(item.bread, 13, 1);
newPourchase.addItem(item.cola, 18, 1);
newPourchase.addItem(item.bread, 12, 1);
console.log("printing all items");
newPourchase.printItems();
