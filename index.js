const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.use("/users", require("./routes/user"))
app.use("/categories", require("./routes/category"))
app.use("/products", require("./routes/product"))



app.listen(PORT)