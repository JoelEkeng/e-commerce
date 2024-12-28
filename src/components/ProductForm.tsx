//@ts-nocheck
'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

interface ProductFormProps {
  onProductSaved: () => void;
}

interface ProductFormInputs {
  id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

import { useState } from 'react';

const ProductForm: React.FC<ProductFormProps> = ({ onProductSaved }) => {
  const { register, handleSubmit, reset, setValue } = useForm<ProductFormInputs>();
  const [image, setImage] = useState<File | null>(null);

  const onSubmit = async (data: ProductFormInputs) => {
    const method = data.id ? 'PUT' : 'POST';
    const endpoint = data.id ? `https://e-commerce-mbyo.onrender.com/admin/products/${data.id}` : 'https://e-commerce-mbyo.onrender.com/admin/products/';

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'price' || key === 'stock') {
        formData.append(key, value !== undefined ? value.toString() : '');
      } else {
        formData.append(key, value !== undefined ? value : '');
      }
    });
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(endpoint, {
        method,
        body: formData,
      });
      if (!response.ok) throw new Error('Error saving product');
      onProductSaved();
      reset();
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="hidden" {...register('id')} />

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          className="w-full border rounded p-2"
        ></textarea>
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          {...register('price', { required: 'Price is required', min: 0 })}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          {...register('stock', { required: 'Stock is required', min: 0 })}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          {...register('category', { required: 'Category is required' })}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border rounded p-2"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Product
      </button>
    </form>
  );
};

export default ProductForm;