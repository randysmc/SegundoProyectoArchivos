//los roles son identificadores 
import { Schema, model } from 'mongoose'

export const ROLES = [ "user", "administrador", "empleado"]


const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
}
);

export default model('Role', roleSchema); 