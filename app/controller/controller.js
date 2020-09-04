const User = require("../models/User") 


exports.allUser = async function (req,res){
    try{
        const user = await User.find()
        res.json(user)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.insertUser =async function (req,res){
    const user = new User({
        name:req.body.name,
        surname:req.body.surname,
        age:req.body.age
    })
    try {
        const newUser = await user.save()
        res.status(401).json(newUser)        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    res.end("upsert user")
}

exports.getUser =  async function (req,res){
    try {
        let user  = await User.findById(req.params.id)
        if(user == null) res.status(404).json({message:"Cannot find user"})
        else res.json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }   
}

exports.deleteUser =async function (req,res){
    try {
        let user  = await User.findById(req.params.id)
        if(user == null) res.status(404).json({message:"Cannot find user"})
        else {
            await user.remove()
            res.json({message:"User deleted"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }   
}

exports.updateUser = async function (req,res){
    try {
        let user  = await User.findById(req.params.id)
        if(user == null) res.status(404).json({message:"Cannot find user"})
        else {
            user.name=req.body.name
            user.surname=req.body.surname
            user.age = req.body.age                
            const updateUser = await user.save()
            res.json(updateUser)
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }  
}


