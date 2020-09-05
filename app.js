// const http = require('http')
const express = require("express");
const bodyParser = require("body-parser");

// express sever
const app = express();

// routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 page not found
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
});

// const server = http.createServer(app)

app.listen(3000);
