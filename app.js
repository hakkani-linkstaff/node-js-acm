// const http = require('http')
const path = require("path");
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
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// const server = http.createServer(app)

app.listen(3000);
