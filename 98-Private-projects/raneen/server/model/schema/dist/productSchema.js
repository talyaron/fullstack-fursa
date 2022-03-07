"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var productSchema = new mongoose.Schema({
    name: String,
    typeId: String,
    url: String,
    price: Number,
    description: String,
    quantity: Number
});
//the collection
var Products = mongoose.model("Products", productSchema);
exports["default"] = Products;
