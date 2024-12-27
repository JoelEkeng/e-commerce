'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const categories = ['Smartphones', 'TVs', 'Appliances', 'Computing'];

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        axios.get('https://e-commerce-mbyo.onrender.com/admin/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(() => {
                setErrorMessage('Failed to load products. Please try again later.');
            });
    }, []);

    interface Product {
        id: string;
        name: string;
        price: number;
        category: string;
        image?: string;
        description?: string;
    }

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleMoreAboutProduct = (productId: string) => {
        router.push(`/products/${productId}`);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategories.length === 0 || selectedCategories.includes(product.category))
    );

    return (
        <div className="h-screen flex">
            <aside className="w-1/4 p-4 bg-gray-100">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul>
                    {categories.map(category => (
                        <li key={category} className="mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                {category}
                            </label>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="w-3/4 p-4">
                {errorMessage && (
                    <div className="mb-4 text-red-600">
                        {errorMessage}
                    </div>
                )}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full p-2 border border-gray-300 rounded"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition-all">
                            <img
                                src={product.image || '/placeholder-image.jpg'}
                                alt={product.name}
                                className="w-full h-48 object-cover mb-4"
                            />
                            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                            <p className="text-gray-700 mb-2">Price: ${product.price}</p>
                            <p className="text-gray-700">Category: {product.category}</p>
                            <button
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={() => handleMoreAboutProduct(product.id)}
                            >
                                More about product
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProductPage;
