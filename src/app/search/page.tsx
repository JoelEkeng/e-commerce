"use client";
import React from "react";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import Search from '@/components/Search';

const SearchPage: React.FC = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (query) {
            const fetchProducts = async () => {
                try {
                    const response = await axios.get(`https://e-commerce-mbyo.onrender.com/admin/products?search=${query}`);
                    setProducts(response.data);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };

            fetchProducts();
        }
    }, [query]);

    return (
        <div className="p-12">
                <Suspense fallback={<div>Loading...</div>}>
                <Search />
                </Suspense>
         
            <h1 className="mt-12 text-xl font-bold">Search Results for "{query}"</h1>
            {products.length > 0 ? (
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product: any) => (
                        <div key={product.id} className="border p-4 rounded">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="text-red-500">${product.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default SearchPage;