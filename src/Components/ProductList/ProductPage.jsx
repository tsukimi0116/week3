import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    let { id } = useParams();
    return (
        <h1>ProductPage ID = {id}</h1>
    )
}

export default ProductPage;