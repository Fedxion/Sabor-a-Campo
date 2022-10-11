const UserService = require("../service/UserService");
const winston = require('winston');

const consoleTransport = new winston.transports.Console()
/**
 * Posee las llamadas a los servicios correspondientes
 * para cada operación del CRUD
 * 
 */
 const myWinstonOptions = {
  transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)


module.exports = class UserController {

  /**
   * Método usado para llamar al servicio 
   * correspondiente para registrar un nuevo estudiante
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async save(req, res) {
    try {  
      logger.info(req.body.nombre);              //VA .NOMBRE AHI?
      await studentService.save(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * Método usado para llamar al servicio 
   * correspondiente para actualizar un estudiante
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async update(req, res) {
    try {
      await studentService.update(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * Método usado para llamar al servicio 
   * correspondiente para eliminar un estudiante
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async delete(req, res) {
    try {
      await studentService.delete(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * Método usado para llamar al servicio 
   * correspondiente para buscar un estudiante
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findOne(req, res) {
    try {
      await studentService.findOne(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * Método usado para llamar al servicio 
   * correspondiente para buscar todos los estudiantes
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findAll(req, res) {
    try {
      await studentService.findAll(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};