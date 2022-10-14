const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt= require('bcrypt');

const saltRounds = 10;

const UserShema = new mongoose.Schema({
  email: {type:String, required:true, unique: true},
  password:{type:String, required:true}
});

// const userSchema = new Schema(
//   {
//     email: {
//       type: String,
//       require: true,
//     },
//     password: {
//       type: String,
//       require: true,
//     },
//   },
//   { collection: "User" }
// );
// module.exports = mongoose.model("User", userSchema);
