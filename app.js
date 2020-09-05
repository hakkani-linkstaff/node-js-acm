// const http = require('http')
const express = require("express");
const bodyParser = require("body-parser");

// express sever
const app = express();

// routes
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRouter);
app.use(adminRouter);

// 404 page not found
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
});

// const server = http.createServer(app)

app.listen(3000);
