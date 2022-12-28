//routes are built here 
//using router routes are build
const express = require('express');
const { getAllProducts } = require('../controllers/productController');

const router=express.Router();

router.route("/products").get(getAllProducts);

module.exports=router;