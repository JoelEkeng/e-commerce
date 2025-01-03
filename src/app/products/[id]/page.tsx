'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';

const ProductPage = () => {
    const router = useRouter();
    const { id } = useParams();
    interface Product {
        name: string;
        description: string;
        price: number;
        category: string;
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
        if (product) {
            const cartItem = {
                productId: id,
                name: product.name,
                price: product.price,
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const existingItemIndex = cart.findIndex((item: any) => item.productId === id);

            if (existingItemIndex >= 0) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push(cartItem);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Product added to cart:', cartItem);
            router.push('/cart'); // Navigate to the cart page
        }
    };

    if (!product) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-semibold mb-4">${product.price}</p>
                <p className="text-lg text-lime-500 rounded-2xl mb-4 italics">{product.category}</p>
                </div>
                <button
                    onClick={addToCart}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductPage;