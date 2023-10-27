import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import Role from "../models/role.model.js";

//crear cuenta
export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  // const userFound = User.find({email})

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();
  console.log(savedUser);

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 604800, // dias
  });

  res.status(200).json({ token });
};

//iniciar sesión
export const signIn = async (req, res) => {
  const userFound = await User.findOne({ username: req.body.username }).populate("roles");

  if (!userFound) return res.status(400).json({ message: "user not found" });

  //Este metodo nos devuelve un true or false respecto a la contraseña
  const matchPassword = await User.comparePassword(req.body.password, userFound.password)

  if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid Password'})

  const token = jwt.sign({id: userFound._id}, config.SECRET, {
    expiresIn: 604800
  })

  console.log(userFound);
  res.json({token})
};

//1:32


