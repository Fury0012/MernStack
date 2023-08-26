const AgentsControllers = require("../controllers/agents.controllers")
console.log(AgentsControllers)

module.exports = (app) => {
    app.get("/api/agents", AgentsControllers.findAllAgents)
}

