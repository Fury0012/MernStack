const NoteController = require("../controllers/notes.controller")

module.exports = (app) => {
    app.post("/api/notes",  NoteController.createNote )
    app.get("/api/notes", NoteController.getAllNotes)
    app.get("/api/notes/:id", NoteController.getOneNote)
    app.put("/api/notes/:id", NoteController.updateNote)
    app.delete("/api/notes/:id", NoteController.deleteNote)
}

