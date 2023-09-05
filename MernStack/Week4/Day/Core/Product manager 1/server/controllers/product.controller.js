const Product = require("../models/product.model")

module.exports = {
    createProduct: (req,res)=>{
        console.log(req.params)
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err))
    },
    getAllProducts: (req,res) =>{
        Product.find({})
            .then((allProducts)=>{
                console.log(allProducts);
                res.json(allProducts)
            })
            .catch((err)=>console.log(err))
    },
    getOneProduct: (req,res) =>{
        Product.findOne({_id: req.params.id})
            .then((oneProduct)=>{
                console.log(oneProduct);
                res.json(oneProduct)
            })
    },
    updateProduct: (req,res)=>{
        Product.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true} 
        )
        .then((updatedProducts)=>{
            console.log(updatedProducts);
            res.json(updatedProducts)
        })
        .catch((err)=> console.log(err) )
    },

    deleteProduct: (req,res)=>{
        Product.deleteOne({_id: req.params.id})
        .then((deletedProduct)=>{
            console.log(deletedProduct);
            res.json(deletedProduct)
        })
        .catch((err)=>console.log(err))
    }
    }