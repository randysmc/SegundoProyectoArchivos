//Especificar que es lo que se guarda

import {Schema, model} from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username : {
        type: String,
        unique: true,
        required: true,
        //trim: true,
    },
    email : {
        type: String,
        required: true,
        //trim: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    //pueden ser multiples roles para manejar los permisos

    roles: [{
        //ref tiene una referencia a otro modelo
        ref: "Role",
        // el id que mongoose va a guardar al momento de crear un rol nuevo
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false,
}
    

);
//metodos para cifrar el password

userSchema.statics.encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

export default model('User', userSchema ); 