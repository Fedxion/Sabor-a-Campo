const { Router } = require("express");
const router = Router();
const RegisterController = require("../controller/RegisterController");

router.get("/register", RegisterController.register);

router.get("/register/:User", RegisterController.register);

router.post("/register", RegisterController.register);

router.put("/register/:User", RegisterController.register);

router.delete("/register/:User", RegisterController.register);

module.exports = router;
