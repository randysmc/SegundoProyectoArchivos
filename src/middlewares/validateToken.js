import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"
import User from "../models/user.model.js"
import Role from "../models/role.model.js"

export const authRequire =  (req, res, next) =>{
    //const token = req.headers.cookie;
    const {token} = req.cookies;
    if(!token) return res.status(401).json({ message: "No token autorizado"})

    const decoded = jwt.verify(token, TOKEN_SECRET);
    req.userId = decoded.id;

    jwt.verify(token, TOKEN_SECRET, (err, user) =>{
        if(err) return res.status(403).json({message: "invalid token"})
        req.user = user;
        
        next()
    })

    
}



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

