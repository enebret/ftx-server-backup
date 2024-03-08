const mongoose = require ('mongoose');
const userschema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true 
    },
    balance: {
        type:String
    },
    profit: {
        type:String,
        default:'0'
    },
    email:{
        type:String,
        required: true 
    },
    phone:{
        type:String,
        required: true 
    },
    password:{
        type:String,
        required: true 
    },
    dateRegistered:{
        type:Date,
        default:Date.now
    },
})

module.exports = User = mongoose.model('user', userschema)
