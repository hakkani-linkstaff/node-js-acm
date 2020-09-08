const path = require("path");

const express = require("express");
const rootDirectory = require("../util/path");

const router = express.Router();
const products = [];

// route.use((req, res, next) => {...})
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //res.sendFile(path.join(rootDirectory, "views", "/add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    formCSS: true,
    activeAddProduct: true
  });
});

// route.use((req, res, next) => {...})
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);

  const { title, description, price } = req.body;
  products.push({ title, description, price });

  res.redirect("/");
});

// module.exports = router
exports.routes = router;
exports.products = products;
