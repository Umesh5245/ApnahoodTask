const  mongoose = require('mongoose')

const schema =  mongoose.Schema
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const UserSchema =new mongoose.Schema({
    name:{
        type: String
    },
    type:{
        type: String
    },
    email:{
        type: String,
        unique: true,
        index: true,
        lowercase: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }
   
},  { collection: 'users' },{timestamps:true})
const User=mongoose.model('User',UserSchema)
module.exports= User