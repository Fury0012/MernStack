const Notes = require("../models/notes.Models")

module.exports = {
    createNote: (req,res)=>{
        console.log(req.params)
        Notes.create(req.body)
            .then((newNotes) => res.json(newNotes))
            .catch((err) => console.log(err))
    },
    getAllNotes: (req,res) =>{
        Notes.find({})
            .then((allNotes)=>{
                console.log(allNotes);
                res.json(allNotes)
            })
            .catch((err)=>console.log(err))
    },
    getOneNote: (req,res) =>{
        Notes.find ({_id: req.params.id})
            .then((oneNote)=>{
                console.log(oneNote);
                res.json(oneNote)
            })
            .catch((err)=> console.log(err))
    },
    updateNote: (req,res)=>{
        Notes.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true} 
        )
        .then((updatedNote)=>{
            console.log(updatedNote);
            res.json(updatedNote)
        })
        .catch((err)=> console.log(err) )
    },

    deleteNote: (req,res)=>{
        Notes.deleteOne({_id: req.params.id})
        .then((deletedNote)=>{
            console.log(deletedNote);
            res.json(deletedNote)
        })
        .catch((err)=>console.log(err))
    }
    }