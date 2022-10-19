const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register process
const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.json({
          message: "Usuario registrado correctamente!",
        });
      })
      .catch((error) => {
        res.json({
          message: "Error al registrar usuario",
        });
      });
  });
};

//login process

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({ $or: [{ email: username }, { surname: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign({ name: user.name }, "secretValue", {
              expiresIn: "1h",
            });
            res.json({
              message: "Login Correcto",
              token,
            });
          } else {
            res.json({
              message: "Clave incorrecta",
            });
          }
        });
      } else {
        res.json({
          message: "Usuario no encontrado",
        });
      }
    }
  );
};




module.exports = {
  register,
  login,
};