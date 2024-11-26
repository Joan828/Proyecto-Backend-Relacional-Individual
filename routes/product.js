const express = require ("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()
const {authentication} = require('../middlewares/authentication')

router.post("/create", authentication, ProductController.create)
router.get("/getAll", ProductController.getAll)
router.put("/update/:id", authentication, ProductController.update)
router.delete("/delete/:id", authentication, ProductController.delete)
router.get("/getById/:id", ProductController.getById)
router.get("/getByName/:name", ProductController.getByName)
router.get("/getByPrice/:price", ProductController.getByPrice)
router.get("/orderByPriceD", ProductController.orderByPriceD)

module.exports = router
