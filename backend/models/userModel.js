const mongoose = required('mongoose');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');


const userSchema=new mongoose.Schema({
    fullname: {
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first name atleast 3 cxharacter long'],
        },
        lastname:{
            type:String,
            minlength:[3,'last name atleast 3 cxharacter long'],
        },
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[5,"email must be 5 chsarachter long"],
        },
        password:{
            type:String,
            required:true,
            select:false,
        },
        socketId: {
            type:String,
        }
    }
})
userSchema.methods.generateAuthToken=function() {
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}
userSchema.methods.comparePassword=async function (password){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword=async function(password){
    const hashedPassword=await bcrypt.hash(password,10);
    return hashedPassword;
}
const userModel=mongoose.model('user',userSchema);

module.exports=userModel;