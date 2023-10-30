import User from "../models/user.model.js";
//import jwt from "jsonwebtoken";
import config from "../config.js";
import Role from "../models/role.model.js";
import { token } from "morgan";
import { createAccessToken } from "../libs/jwt.js";

//crear cuenta
export const register = async (req, res) => {
  const { username, password, roles } = req.body;

  // const userFound = User.find({email})

  try {
    const newUser = new User({
      username,
      password: await User.encryptPassword(password),
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    //Lo guarda en la base de datos
    const userFound = await newUser.save();
    console.log(userFound);
    await createAccessToken({id: userFound._id})

    res.cookie('token', token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt
    })

    //res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};




//iniciar sesión
export const login = async (req, res) => {
  const {username, password} = req.body;
  try {
    
    const userFound = await User.findOne({
      username: req.body.username,
    }).populate("roles");
     
  
    if (!userFound) return res.status(400).json({ message: "user not found" });
  
    //Este metodo nos devuelve un true or false respecto a la contraseña
    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

  
    if (!matchPassword)
      return res.status(401).json({ token: null, message: "Invalid Password" });
  
       
    /**
     * const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 604800,
    });
     */

    const token = await createAccessToken({id: userFound._id})
    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt
    })

  } catch (error) {
    res.status(500).json({message: error.message})
  }
};


export const logout = (req, res) => {
  res.cookie('token', "", {
    expires: new Date(0)
  })
  return res.sendStatus(200); 

}

export const profile = async (req, res, next) => {
  const userFound = await User.findById(req.user.id)

  if(!userFound) return res.status(400).json({ message: "User not found"});
  

  return res.json({
    id: userFound._id,
    username: userFound.username,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })

  res.send('profile')
  next()
}
