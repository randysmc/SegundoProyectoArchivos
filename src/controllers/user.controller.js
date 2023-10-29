//import User from "../models/user.model.js"

export const getUsers = async (req, res) =>{
    //const users = await User.find();
    //res.json(users)
    res.json({ message: "hola desde usuario"})
}

export const createUser = (req, res) => {
    res.json('Creating User')
}