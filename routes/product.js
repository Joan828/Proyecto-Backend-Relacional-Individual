const express = require ("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()

router.post("/create",ProductController.create)
router.get("/getAll",ProductController.getAll)
router.put("/update/:id",ProductController.update)
router.delete("/delete/:id",ProductController.delete)
router.get("/getById/:id",ProductController.getById)
router.get("/getByName/:name",ProductController.getByName)
router.get("/getByPrice/:price",ProductController.getByPrice)




module.exports = router
