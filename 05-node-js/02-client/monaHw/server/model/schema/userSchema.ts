const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    id:String,
    name:String,
    phone:String,
    email:String,
    password:String

});

const User=mongoose.model('User',userSchema)
export default User;