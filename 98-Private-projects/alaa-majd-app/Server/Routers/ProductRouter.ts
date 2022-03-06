// import { ModelTraining } from "@mui/icons-material";

const express = require("express");
const productSchema = require('../Schema/ProductSchema')
const router = express.Router();
router.post("/addProduct", async (req, res) => {
    const {id, name , price ,quantity, description,Url} = req.body;
    const productToAdd = new productSchema({
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        Url: Url,
    })
    productToAdd.save();
    res.send("user Added Succ")
})
module.exports = router;