const express = require ("express")
const UserController = require("../controllers/UserController")
const router = express.Router()
const {authentication} = require('../middlewares/authentication')

router.post("/create",UserController.create)
router.get("/getAll",UserController.getAll)
router.get("/getUserInfoLogged",authentication, UserController.getUserInfoLogged)
router.put("/update/:id",authentication, UserController.update)
router.post("/login", UserController.login)
router.delete('/logout',authentication, UserController.logout)

module.exports = router
