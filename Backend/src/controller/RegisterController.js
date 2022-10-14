const RegisterService = require("../service/RegisterService");

module.exports = class RegisterController {
  static async register(req, res) {
    try {
      await RegisterService.register(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }};