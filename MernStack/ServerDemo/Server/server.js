const express = require("express")

const app = express()

app.use(express.json(), express.urlencoded({ extended: true}))

require("dotenv").config()
require("./config/mongoose.config")
require("./routes/agents.routes")

const port = process.env.port


app.listen(port, () => {
    console.log(` >>>>> Server is running Port ${port}🎈🎈🎈🎈`)
})

