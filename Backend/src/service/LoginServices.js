const User = require("../model/User");

module.exports = class UserService {
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const User = await User.find({ Username }).select("-_id").select("-__v");
      if (User) {
        if (User.password === password) {
          res.json({ data: "logged" });
          res.status(200);
        } else {
          res.json({ data: "Not logueado" });
          res.status(400);
        }
      }
    } catch (error) {
      res.status(400);
      res.json({ error: error });
    }
  }
};
