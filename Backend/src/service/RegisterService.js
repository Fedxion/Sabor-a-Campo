// const User = require("../model/User");

// module.exports = class UserService {
//   static async register(req, res) {
//     const { email, password } = req.body;
//     try {
//       const User = await User.register({ Username }).select("-_id").select("-__v");
//       if (User) {
//         if (User.password === password) {
//           res.json({ data: "registred" });
//           res.status(200);
//         } else {
//           res.json({ data: "Not registred" });
//           res.status(400);
//         }
// //       }
//     } catch (error) {
//       res.status(400);
//       res.json({ error: error });
//     }
//   }
// };
