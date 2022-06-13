import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState({});
    const {id} =useParams();

    useEffect(() =>{
        if (id){
            fetch(`http://localhost:8080/products/${id}`)
            .then((r) => r.json())
            .then((d) => setProduct(d)); 
        }
    },[id]);
  return (
    <div>Product id: {id} <div>{product.name}</div> <div>{product.price}</div> <div><Link to="/products">More Details</Link></div></div>
  )
}

export default Product