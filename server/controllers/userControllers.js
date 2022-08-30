const Users = require("../modules/userModule");
exports.register = (req, res) => {
  res.json({ msg: "welcome to my projects" });
};
// var bcrypt = require("bcryptjs");
// exports.register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     var salt = bcrypt.genSaltSync(10);
//     var hash = bcrypt.hashSync(password, salt);
//     const newUser = await User.create({ username, email, password: hash });
//     res.json(newUser);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "something went wrong ." });
//   }
// };
