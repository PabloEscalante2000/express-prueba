const express = require("express");
const router = express.Router();
const path = require("path")

const adminData = require("./admin.js")

router.get("/",(req,res,next) => {
    console.log(adminData.products)
    //res.sendFile(path.join(__dirname,"../","views","shop.html"));
    const products = adminData.products
    res.render("shop", {prods: products, docTitle:"Shop"})
})

module.exports = router