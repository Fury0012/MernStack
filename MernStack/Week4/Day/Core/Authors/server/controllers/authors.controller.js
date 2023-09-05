const Authors = require("../models/authors.model")

module.exports = {
    
    createAuthor: (req,res)=>{
        Authors.create(req.body)
            .then((newAuthor)=> res.json(newAuthor))
            .catch((err)=>console.log(err))
    },

    getAllAuthors: (req,res)=>{
        Authors.find({})
            .then((allAuthors)=>{
                console.log(allAuthors)
                res.json(allAuthors)
            })
    },
    getOneAuthor: (req,res)=>{
        Authors.findOne({_id: req.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor);
                res.json(oneAuthor)
            })
    },
    updateAuthor: (req,res)=>{
        Authors.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true} 
        )
        .then((updatedAuthors)=>{
            console.log(updatedAuthors);
            res.json(updatedAuthors)
        })
        .catch((err)=> console.log(err) )
    },

    deleteAuthor: (req,res)=>{
        Authors.deleteOne({_id: req.params.id})
        .then((deletedAuthor)=>{
            console.log(deletedAuthor);
            res.json(deletedAuthor)
        })
        .catch((err)=>console.log(err))
    }

}