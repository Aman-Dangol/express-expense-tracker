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

server.use(express.json());
server.use("/public", express.static("./public"));
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
  res.render("index");
});

server.get("/getData", (req, res) => {
  let data = connection.query("select * from expenses", (err, data, fields) => {
    res.render("tableData", { data: data });
  });
});

server.post("/insert", (req, res) => {
  const { title, category, amount } = req.body;
  connection.query(
    `insert into expenses(title,category,amount) values('${title}','${category}','${amount}')`
  );
  res.redirect("/");
});

server.delete("/delete", (req, res) => {
  const { id } = req.body;
  connection.query(`delete from expenses where id=${id}`);
  res.send();
});

server.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `select * from expenses where id = ${id}`,
    (err, data, field) => {
      if (err) {
        res.sendStatus(404);
        return;
      }
      res.render("edit", { data: data });
    }
  );
});

server.post("/update", (req, res) => {
  const { id, title, category, amount } = req.body;
  connection.query(
    `update  expenses set title='${title}',category='${category}',amount=${amount} where id=${id} `
  );
  res.json(req.body);
});
server.listen(8000);
