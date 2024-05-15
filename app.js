const express = require("express");
const server = express();
const mysql = require("mysql");

let connection = mysql.createConnection({
  database: "expensedb",
  user: "root",
  password: "root",
  host: "127.0.0.1",
});

server.set("view engine", "ejs");

server.use("/public", express.static("./public"));

server.get("/", (req, res) => {
  let data = connection.query("select * from expenses", (err, data, fields) => {
    res.render("index", { data: data });
  });
});

server.listen(8000);
