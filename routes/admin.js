const path = require("path");

const express = require("express");
const rootDirectory = require("../util/path");

const router = express.Router();
const products = [];

// route.use((req, res, next) => {...})
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "./views", "/add-product.html"));
});

// route.use((req, res, next) => {...})
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router
exports.routes = router;
exports.products = products;
