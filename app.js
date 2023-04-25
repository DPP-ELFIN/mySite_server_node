/** @format */

const express = require("express");
const router = require("./router/index");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/api", router);

app.listen(3333, () => {
  console.log("listen on http://127.0.0.1:3333");
});
