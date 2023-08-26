    const User = require("../models/agents.model")

module.exports.findAllAgents = (req, res) => {
    GamesSchema.find()
    .then(allAgents => {
        console.log(allAgents)
        res.json(( allAgents))
    })
    .catch(err => { res.json({ message: "wait a minute😶"})})
}   