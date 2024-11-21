const {Order} = require("../models/index")

const OrderController = {
    async create(req, res){
        try {
            const order = await Order.create(req.body)
            res.status(201).send([{message:"Order saccessfully created", order}])
        } catch (err) {
            res.status(500).send({message: "There was an error", err})
        }
    }
}

module.exports = OrderController
