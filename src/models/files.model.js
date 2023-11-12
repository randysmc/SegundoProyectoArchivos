import { Schema, model } from "mongoose";

const fileSchema = new Schema({
    name: {
        type:String,
        unique: true,
    },
    path: {
        type:String,
        unique: true,
    }
},
{
    timestamps: true,
    versionKey: false,
});

export default model('File', fileSchema);