const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
content: {
    type: String,
    required: [true, "Content is required"],
    minlength: [10, "Content must be at least 10 characters long"],
},
createdAt: {
    type: Date,
    default: Date.now,
},
});

module.exports = mongoose.model('Joke', JokeSchema);
