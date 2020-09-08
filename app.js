// const http = require('http')
const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser");

// express sever
const app = express();
const port = process.env.PORT || 3000;

// config template engine PUG
// app.set("view engine", "pug");
// app.set("views", "views");

// config template engine Handlebars
// app.engine('handlebars', exphbs());
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

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
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(port, () => {
  console.log('Server is running on port ' + port)
});
