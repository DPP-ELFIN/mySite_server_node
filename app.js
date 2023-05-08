/** @format */

const express = require("express");
const router = require("./router/index");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/api", router);

app.use((req, res, next) => {
  // console.log(res);
  res.json({ code: res.statusCode, data: res.data, ms: res.msg });
});
// 没有匹配到的路由 客户端错误
app.use((req, res, next) => {
  res.status(404).send("404 NOT FOUND");
});
// 服务器错误
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("SERVICE ERROR");
});

app.listen(3333, () => {
  console.log("listen on http://127.0.0.1:3333");
});
