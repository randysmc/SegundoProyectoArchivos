import User from "../models/user.model.js"
import Role from "../models/role.model.js"

export const getUsers = async (req, res) =>{
    try {
        const users = await User.find().populate('roles');
        res.json(users)
    } catch (error) {
        return res.status(500).json({message: message})
    }
    
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

export const deleteUser = async (req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.parmas.id);
        if(!user) 
            return res.status(400).json({message: 'User Not Found'})
    return res.status(204);

    } catch (error) {
        return res.status(500).json({message: message})
    }
}

export const updateUser = async (req, res) => {
    try {
        const {username} = req.body;
        const userUpdate = await User.findOneAndUpdate(
            {_id: req.params.id},
            {title,  username},
            {new: true}
        );
        return res.json(userUpdate);
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
};

export const getUser = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "user not found" });
      return res.status(200).json(user);
  } catch (error) {
      return res.status(500).json({message: error.message})
  }
  };
