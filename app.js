// const http = require('http')
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// express sever
const app = express();

// routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Serving static or HTML rendering pages
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// 404 page not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
