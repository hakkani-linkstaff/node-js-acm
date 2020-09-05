const path = require("path");
const express = require("express");
const rootDirectory = require("../util/path");

const route = express.Router();

route.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "./views", "shop.html"));
});

// module.exports = route
module.exports = route;
