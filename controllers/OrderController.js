const {Order, Product} = require("../models/index")

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
            const orders = await Order.findAll({
                attributes:["description"],
                include: { model: Product, attributes: ["name", "price"], through: { attributes: [] } },
            })
            // Aquí calculariamos el precio total de todos los pedidos
            // let totalPrice = 0
            // orders.forEach(element => {               
            //     element.Products.forEach(e=>{
            //         totalPrice += +e.dataValues.price                     
            //     });
                
            // });
            // res.status(200).send([{message:"Showing all orders:", orders, TotalOrdersPrice: totalPrice}])
        } catch (err) {
            console.log(err);
            
            res.status(500).send({message: "There was an error", err})
        }
    }
}

module.exports = OrderController
