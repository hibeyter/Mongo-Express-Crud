const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:false
    },
    age:{
        type:Number,
        require:false
    },
    created:{
        type:Date,
        require:true,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)