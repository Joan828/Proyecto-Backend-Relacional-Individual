const express = require ("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()

router.post("/create",ProductController.create)
router.get("/getAll",ProductController.getAll)

module.exports = router
