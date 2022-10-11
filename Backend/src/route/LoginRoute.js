const {Router} = require('express');
const router = Router();
const LoginController = require("../controller/LoginController");


router.get("/login", LoginController.findAll);

router.get("/login/:email", LoginController.findOne);

router.post("/login", LoginController.save);

router.put("/login/:email", LoginController.update);

router.delete("/login/:email", LoginController.delete);

module.exports = router;