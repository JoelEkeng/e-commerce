'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;
    interface Product {
        name: string;
        description: string;
        price: number;
    }
    
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`https://e-commerce-mbyo.onrender.com/admin/products/${id}`)
                .then(response => {
                    setProduct(response.data);
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                });
        }
    }, [id]);

    const addToCart = () => {
        // Add to cart functionality here
        console.log('Add to cart:', product);
    };

    if (!product) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-xl font-semibold mb-4">${product.price}</p>
                <button
                    onClick={addToCart}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductPage;