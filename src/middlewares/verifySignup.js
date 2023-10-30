//Es para validar

import { ROLES } from "../models/role.model.js";

export const checkDuplicateUser = async(req, res, next) =>{
  const user = await User.findOne({username: req.body.username})
  if(user) return res.status(400).json({message: "el usuario ya existe"})

  next()
}


export const chekRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      /** ROLES
       * administrador
       * usuario
       * empleado
       */
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
            message: `Role ${req.body.roles[i]} No existe`
        })
      }
    }
  }
  next();
};
