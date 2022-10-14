const mongoose = require("mongoose");

const url = "mongodb://27.0.17/loginSystem";

mongoose.connect(url, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BD conectada");
});
