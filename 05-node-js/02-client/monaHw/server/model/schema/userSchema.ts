const mongoose=require('mongoose')

export const UserSchema=new mongoose.Schema({
    id:String,
    name:String,
    phone:String,
    email:String,
    password:String

});

const User=mongoose.model('User',UserSchema)
export default User;