const express = require ("express")
const UserController = require("../controllers/UserController")
const router = express.Router()

router.post("/create",UserController.create)
router.get("/getAll",UserController.getAll)
router.put("/create",UserController.update)


module.exports = router