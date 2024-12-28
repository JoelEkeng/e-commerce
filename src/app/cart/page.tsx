"use client";

import React, { useState } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const CartPage: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addItemToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const removeItemFromCart = (itemId: number) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map((cartItem) =>
                    cartItem.id === itemId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            }
            return prevCart.filter((cartItem) => cartItem.id !== itemId);
        });
    };

    const deleteItemFromCart = (itemId: number) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
    };

    const getTotalCartPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <p>No items in the cart. Add items.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price} x {item.quantity}
                                <button onClick={() => addItemToCart(item)}>Add</button>
                                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                                <button onClick={() => deleteItemFromCart(item.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Total: ${getTotalCartPrice().toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
};

export default CartPage;