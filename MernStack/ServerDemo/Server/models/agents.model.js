const mongoose = require("mongoose")


const Agents = new mongoose.Schema({
    agents:{
    type: String,
    require : [true, "the singer name is required!"]
    },
    
    agents: {
        type: String,
        required: [true, "music is require"],
        minlength: [3, "minimum of length is 3"]
    },

    views: {
        type: Number
    }
}, {timestamps: true});
module.exports.AgentsSchema = mongoose.model("AgentsSchema", Agents)
