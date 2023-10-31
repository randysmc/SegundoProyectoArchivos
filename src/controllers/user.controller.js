import User from "../models/user.model.js"
import Role from "../models/role.model.js"

export const getUsers = async (req, res) =>{
    const users = await User.find();
    res.json(users)
    
}

export const createUser = async (req, res) => {
    try {
        const {username, password, roles} = req.body;

        const rolesFound = await Role.find({name: { $in: roles} });

        //creando al nuevo usuario

        const user = new User({
            username,
            password,
            roles: rolesFound.map((role) => role._id),
        });

        //encriptar contraseña
        user.password = await User.encryptPassword(user.password)

        const savedUser = await user.save();

        return res.status(200).json({
            _id: savedUser._id,
            username: savedUser.username,
            roles: savedUser.roles,
            message: "usuario creado"
        })


    } catch (error) {
        console.log(error)
        
    }
}