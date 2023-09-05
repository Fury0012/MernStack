const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({ origin: 'http://localhost:3000' }));


app.use(express.json())
app.use(express.urlencoded({extended: true})) 

require("dotenv").config()
require("./config/mongoose.config")
require("./routes/authors.routes")(app) 

const port = process.env.PORT

app.use(
    cors({
        origin: "http://localhost:3000", 
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

app.listen(port, () => {
    console.log(`>>>>>>> Server running on port ${port} `);
})