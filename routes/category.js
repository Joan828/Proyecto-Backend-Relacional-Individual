const express = require ("express")
const CategoryController = require("../controllers/CategoryController")
const router = express.Router()

router.post("/create",CategoryController.create)
router.get("/getAll",CategoryController.getAll)
router.put("/update/:id",CategoryController.update)
router.delete("/delete/:id",CategoryController.delete)
router.get("/getCategoryById/:id",CategoryController.getById)
router.get("/getCategoryByName/:name",CategoryController.getByName)





module.exports = router