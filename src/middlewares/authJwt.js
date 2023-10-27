//Para confirmar si el usuario esta enviando token
import jwt from "jsonwebtoken";
import config from "../config.js"
import User from "../models/user.model.js"


export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"]

    if(!token) return res.status(403).json({message: "No token provided"})


    
    next()
}