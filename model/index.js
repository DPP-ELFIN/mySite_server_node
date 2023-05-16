/** @format */

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mySite");
}

main()
  .then((res) => {
    console.log("mongo连接成功");
  })
  .catch((err) => {
    console.log(err);
    console.log("mongo连接失败");
  });

module.exports = {
  User: mongoose.model("User", require("./userModel")),
  Menu: mongoose.model("Menu", require("./menuModel")),
  Role: mongoose.model("Role", require("./roleModel")),
};
