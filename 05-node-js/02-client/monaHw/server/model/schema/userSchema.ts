const mongoose=require('mongoose')

export const UserSchema=new mongoose.Schema({
  
    name:String,
    phone:String,
    email:String,
    password:String

});

const User=mongoose.model('User',UserSchema)
export default User;