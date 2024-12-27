'use client';

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Search from '@/components/Search';

const SearchResults: React.FC = () => {
    const searchParams = useSearchParams();
    const query = searchParams?.get('query');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (query) {
            const fetchProducts = async () => {
                const response = await fetch(`https://e-commerce-mbyo.onrender.com/admin/products?search=${query}`);
                const data = await response.json();
                setProducts(data);
            };

            fetchProducts();
        }
    }, [query]);

    return (
        <div>
            <h1 className="text-xl font-bold">Search Results for "{query}"</h1>
            {products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product: any) => (
                        <div key={product.id} className="border p-4 rounded">
                            <h2 className="font-semibold">{product.name}</h2>
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

const SearchPage: React.FC = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="p-12">
            <Search />
            <SearchResults />
        </div>
    </Suspense>
);

export default SearchPage;
