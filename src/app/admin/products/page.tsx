'use client';

import React, { useEffect, useState } from 'react';
import ProductForm from '@/components/ProductForm';
import ProductTable from '@/components/ProductTable';

const AdminProductPage: React.FC = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://e-commerce-mbyo.onrender.com/admin/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Product Manager</h1>
      <ProductForm onProductSaved={fetchProducts} />
      <h2 className="text-lg font-semibold mt-8">Product Catalog</h2>
      <ProductTable products={products} onProductDeleted={fetchProducts} />
    </div>
  );
};

export default AdminProductPage;
