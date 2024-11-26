const express = require("express")
const app = express()
const PORT = 3000
const { typeError } = require('./middlewares/errors');

app.use(express.json())

app.use("/users", require("./routes/user"))
app.use("/categories", require("./routes/category"))
app.use("/products", require("./routes/product"))
app.use("/orders", require("./routes/order"))

app.use(typeError)

app.listen(PORT)
