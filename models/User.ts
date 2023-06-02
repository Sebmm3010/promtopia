import { IUser } from "@interfaces";
import mongoose, { Schema, model, Model } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      validate: {
        validator: function (userName: string) {
          return userName.length >= 3;
        },
        message: "El nombre debe tener al menos 3 caracteres.",
      },
    },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    image:{type:String}
  },
  {
    timestamps: true,
  }
);

const User:Model<IUser>=mongoose.models.User || model("User", userSchema);
export default User;

