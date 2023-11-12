//creamos unos roles basicos
//import Role from "../models/role.model.js";
import Role from '../models/role.model.js'

export const createRoles = async () => {
  try {
    //si ya existe el documento
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "user"}).save(),
      new Role({ name: "administrador" }).save(),
      new Role({ name: "empleado" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
