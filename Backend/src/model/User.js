const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    dni:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contraseña:{
        type: String,
        required: true
    },
},{collection:'user'});
module.exports = mongoose.model("User", userSchema);