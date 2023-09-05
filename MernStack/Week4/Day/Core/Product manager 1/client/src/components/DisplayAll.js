    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { Link } from 'react-router-dom';

    const DisplayAll = (props) => {
    const { productList, setProductList } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
        .then((res) => {
            console.log(res.data);
            const updatedProductList = productList.filter((product) => product._id !== idFromBelow);
            setProductList(updatedProductList);
        })
        .catch((err) => console.log(err));
    };

    return (
        <div>
        <div>
            <header>
            All products:
            </header>

            {
            productList.map((product, index) => (
                <div key={product._id}>
                <Link to={`/product/${product._id}`} >{product.title} </Link>
                <Link to={`/product/edit/${product._id}`}> 📝</Link>
                <button onClick={() => deleteFilter(product._id)} >❌</button>
                </div>
            ))
            }
        </div>
        </div>
    );
    };

    export default DisplayAll;
