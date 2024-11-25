const {Order} = require("../models/index")

const OrderController = {
    async create(req, res){
        try {
            const order = await Order.create(req.body)            
            order.addProduct(req.body.ProductId)
            res.status(201).send([{message:"Order saccessfully created", order}])
        } catch (err) {
            res.status(500).send({message: "There was an error", err})
        }
    },
    async getAll(req, res){
        try {
            const order = await Order.findAll()
            res.status(200).send([{message:"Showing all orders:", order}])
        } catch (err) {
            res.status(500).send({message: "There was an error", err})
        }
    }
}

module.exports = OrderController
