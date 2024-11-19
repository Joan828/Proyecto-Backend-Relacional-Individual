const {User} = require("../models/index")

const UserController = {
    async create(req, res){
        try{
            const user = await User.create(req.body)
            res.status(201).send({message:"User created successfully",user})
        }catch(err){
            console.log(err);
            res.status(500).send({message:"There was a problem", err})
        }
    }
}

module.exports = UserController