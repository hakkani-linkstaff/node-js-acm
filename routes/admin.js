const express = require("express");

const route = express.Router();

// route.use((req, res, next) => {...})
// /admin/add-product => GET
route.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Add product</button></form>'
  );
});

// route.use((req, res, next) => {...})
// /admin/add-product => POST
route.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

// module.exports = route
module.exports = route;
