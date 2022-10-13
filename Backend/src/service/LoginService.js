// const User = require("../model/User");

// module.exports = class LoginService {                      //ESTA BIEN?????????????????
//     static async findOne(req, res) {
//         const { nombre, contraseña } = req.body;
//         try {
//           const user = await User.findOne({ email }).select("-_email").select("-__v");
//           if(user){
//             if(user.password === password){
//                 res.json({ data: "logged" });
//                 res.status(200);
//             }else{
//                 res.json({ data: "Not logged" });
//                 res.status(400);
//             }
//           }
//         } catch (error) {
//           res.status(400);
//           res.json({ error : error });
//         }
//       }

// }
