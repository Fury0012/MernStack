import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom"
import axios from 'axios'

const OneProduct = (props)=>{

    const {id} = useParams();

    
    const [oneProduct, setOneProduct] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data)
        })
        .catch((err)=>console.log(err))
    }, [id])








    return(
        <div className='oneProduct-component'>
            <h2> {oneProduct.title} </h2>
            <p>price : ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <Link to={"/"}>Go home</Link>
        </div>
    )
}

export default OneProduct;