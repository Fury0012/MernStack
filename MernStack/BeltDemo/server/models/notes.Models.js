const mongoose = require("mongoose")

const NotesSchema = new mongoose.Schema({

    Title:{
        type: String,
        required: [true, "Title Name is require"],
        
    },

    Content:{
        type: String,
        required: [true, "Content is required"],
        minlength: [6, "Note Name must be at least 6 characters long"]
    },

    isImportant:{
        type: Boolean,
        default:"false"
    },

    
    
}, {timestamps:true} )


const Notes = mongoose.model("Notes", NotesSchema);
module.exports = Notes;