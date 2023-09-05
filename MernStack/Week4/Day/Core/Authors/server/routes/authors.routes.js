const AuthorsController = require("../controllers/authors.controller")

module.exports = (app) => {
    app.post("/api/authors/", AuthorsController.createAuthor)
    app.get("/api/authors/", AuthorsController.getAllAuthors)
    app.get("/api/authors/:id", AuthorsController.getOneAuthor)
    app.put("/api/authors/:id", AuthorsController.updateAuthor)
    app.delete("/api/authors/:id", AuthorsController.deleteAuthor)
}