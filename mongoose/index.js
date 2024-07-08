const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;

const app = express();

const conn = require("./db/conn.js");

const productsRoutes = require("./routes/productsRoutes.js");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Read body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/products", productsRoutes);

app.listen(port);
