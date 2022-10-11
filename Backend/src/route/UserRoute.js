const {Router} = require('express');

const router = Router();
const UserController = require("../controller/UserController");

/**
 * Este archivo contiene las rutas para cada acción del CRUD
 *los endpoints que figuran con un :identification se los conoce como
 *endpoints que poseen parámetros los cuales son colocados en la url 
 *al ser llamados desde afuera, ejemplo www.miweb.com/students/45025 
 *donde 45025 es el número de identificación del estudiante
*/


//Devuelve todos los estudiantes almacenados en la base de datos
router.get("/usuario", User.findAll);

//Devuelve un estudiante cuya identification se encuentre almacenado en la base de datos
router.get("/usuario/:email", User.findOne);

//Registra un nuevo estudiante en la base de datos
router.post("/usuario", User.save);

//Actualiza un estudiante en la base de datos
router.put("/usuario/:email", User.update);

//Elimina un estudiante de la base de datos
router.delete("/usuarios/:email", User.delete);

module.exports = router;