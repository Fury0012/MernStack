    // server/controllers/jokes.controller.js
    const Joke = require('../models/jokes.model');

    module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
        .then((jokes) => res.json(jokes))
        .catch((err) => res.status(400).json(err));
    },
    getSingleJoke: (req, res) => {
        Joke.findById(req.params.id)
        .then((joke) => res.json(joke))
        .catch((err) => res.status(400).json(err));
    },
    createJoke: (req, res) => {
        const { content } = req.body;
        Joke.create({ content })
        .then((newJoke) => res.json(newJoke))
        .catch((err) => res.status(400).json(err));
    },
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        })
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => res.status(400).json(err));
    },
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Joke deleted' }))
        .catch((err) => res.status(400).json(err));
    },
    };
