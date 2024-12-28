'use client';

import { useRouter, useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const EditProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams(); // Correct way to get the dynamic parameter

  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: 0,
    stock: 0,
    image: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (!id) return; // Avoid fetching if id is undefined
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://e-commerce-mbyo.onrender.com/admin/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]); // Dependency array includes `id`

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('category', product.category);
      formData.append('price', String(product.price));
      formData.append('stock', String(product.stock));
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await fetch(`https://e-commerce-mbyo.onrender.com/admin/products/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        alert('Product updated successfully!');
        router.push('/admin/products');
      } else {
        console.error('Error updating product:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleInputChange}
          placeholder="Stock"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
