//Para confirmar si el usuario esta enviando token
import jwt from "jsonwebtoken";
import config from "../config.js";
import User from "../models/user.model.js";
import Role from "../models/role.model.js"

export const verifyToken = async (req, res, next) => {
  try {
    //Recibimos un token
    const token = req.headers["x-access-token"];

    //Comprobamos si el token existe
    if (!token) return res.status(403).json({ message: "No token provided" });

    //Si existe extraemos lo que esta dentro del token
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    //console.log(decoded)

    //verificamos si el usuario existe
    const user = await User.findById(req.userId, { password: 0 });
    //console.log(user);

    if (!user) return res.status(404).json({ message: "No user Found" });

    next();
  } catch (error) {
    return res.status(401).json({message: "No autorizado"})
  }
};

export const isAdmin = async(req, res, next) => {
    //comprobar si es admin
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    for(let i = 0; i < roles.length; i++){
        if(roles[i].name === "administrador"){
            next();
            return
        } 
    }
    return res.status(403).json({message: "Require ser administrador"})
}

export const isEmployed = async(req, res, next) => {
    //comprobar si es admin
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    for(let i = 0; i < roles.length; i++){
        if(roles[i].name === "empleado"){
            next();
            return
        } 
    }
    return res.status(403).json({message: "Require ser empleado"})
}
