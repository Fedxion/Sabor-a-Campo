const { Router } = require("express");
const router = Router();
const LoginController = require("../controller/LoginController");

router.get("/login", LoginController.login);

router.get("/login/:User", LoginController.login);

router.post("/login", LoginController.login);

router.put("/login/:User", LoginController.login);

router.delete("/login/:User", LoginController.login);

module.exports = router;
