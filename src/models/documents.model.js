import { Schema, model } from "mongoose";

const documentSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    extension:{
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },

    user: [
      {
        ref: "User",
        type: Schema.Types.ObjectId,
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Document", documentSchema);
