'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

interface ProductTableProps {
  products: Product[];
  onProductDeleted: () => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onProductDeleted }) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`https://e-commerce-mbyo.onrender.com/admin/products/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Error deleting product');
      onProductDeleted();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-separate border-spacing-0">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left border-b">Name</th>
            <th className="px-4 py-2 text-left border-b">Category</th>
            <th className="px-4 py-2 text-left border-b">Price</th>
            <th className="px-4 py-2 text-left border-b">Stock</th>
            <th className="px-4 py-2 text-left border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{product.name}</td>
              <td className="px-4 py-2 border-b">{product.category}</td>
              <td className="px-4 py-2 border-b">${product.price.toFixed(2)}</td>
              <td className="px-4 py-2 border-b">{product.stock}</td>
              <td className="px-4 py-2 border-b flex space-x-2">
                <button
                onClick={() => router.push(`/products/edit/${product._id}`)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
