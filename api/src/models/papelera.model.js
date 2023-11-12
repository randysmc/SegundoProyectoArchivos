import { Schema, model } from "mongoose";

const archiveSchema = new Schema({
    title: {
        type: String,
        
    }, 
    extension: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: [
        {
            ref: 'User',
            type: Schema.Types.ObjectId,
        }
    ],
    file:[
        {
            ref:"File",
            type: Schema.Types.ObjectId,
        }
    ]
},
{
    timestamps: true,
    versionKey: false,
})

export default model('Archive', archiveSchema);