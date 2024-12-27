'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Search from '@/components/Search';


const SearchPage: React.FC = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
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
        <div className="p-12">
            <Search />
            <h1 className="mt-12 text-xl font-bold">Search Results for "{query}"</h1>
            {products.length > 0 ? (
                <div className="pt-4 grid grid-row-1 md:grid-row-2 lg:grid-row-3 gap-4">
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
