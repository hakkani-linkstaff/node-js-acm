const path = require("path");
const express = require("express");
const rootDirectory = require("../util/path");

const route = express.Router();
const adminData = require("./admin");

route.get("/", (req, res, next) => {
  console.log("[shop.js]", adminData.products);
  res.sendFile(path.join(rootDirectory, "./views", "shop.html"));
});

// module.exports = route
module.exports = route;
