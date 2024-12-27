'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from "react-icons/fa6";


const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/search?query=${encodeURIComponent(query.trim())}`);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-full p-2">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search for products..."
                className="flex-grow p-2 outline-none"
            />
            <button 
                onClick={handleSearch} 
                className="bg-black text-white px-4 py-2 rounded-full ml-4 hover:bg-red-600 transition flex items-center justify-center"
            >
                <FaMagnifyingGlass size={18} />
            </button>
        </div>
    );
};

export default Search;