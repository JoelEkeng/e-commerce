'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
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
    <table className="w-full border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>{product.stock}</td>
            <td>
              <button
                onClick={() => router.push(`/products/${product.id}`)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Details
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
