import mongoose, {Schema, model} from "mongoose"

const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:4,
    }
})

export const User = mongoose.model("User", UserSchema);
