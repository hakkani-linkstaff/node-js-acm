const path = require("path");

const express = require("express");
const rootDirectory = require("../util/path");

const route = express.Router();

// route.use((req, res, next) => {...})
// /admin/add-product => GET
route.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "./views", "/add-product.html"));
});

// route.use((req, res, next) => {...})
// /admin/add-product => POST
route.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

// module.exports = route
module.exports = route;
