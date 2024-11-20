const {Product} = require("../models/index")

const ProductController = {
    async create(req, res){
        try {
            const product = await Product.create(req.body)
            res.status(201).send([{message:"Product saccessfully created", product}])
        } catch (err) {
            res.status(500).send({message: "There was an error", err})
        }
    },
    async getAll(req, res){
        try {
            const product = await Product.findAll()
            res.status(201).send([{message:"Showing all products", product}])
        } catch (err) {
            res.status(500).send({message: "There was an error", err})
        }
    }
}

module.exports = ProductController