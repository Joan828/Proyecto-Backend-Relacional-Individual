const express = require ("express")
const UserController = require("../controllers/UserController")
const router = express.Router()
const {authentication} = require('../middleware/authentication')

router.post("/create",UserController.create)
router.get("/getAll",UserController.getAll)
router.put("/update/:id",authentication, UserController.update)
router.post("/login",UserController.login)



module.exports = router