const mongoose = require("mongoose")

const authorsSchema = new mongoose.Schema({

    name:{
        type: String,
        minlength:"4"
    }
}, {timestamps:true})

const Authors = mongoose.model("Authors", authorsSchema)
module.exports = Authors;