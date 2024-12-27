//@ts-nocheck
'use client'

import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

type Inputs = {
    email: string;
    password: string;
};

const Login = () => {
    const [serverError, setServerError] = useState<string | null>(null);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setServerError(null); // Clear previous errors
        try {
            const response = await axios.post('https://e-commerce-mbyo.onrender.com/user/auth/login', data);
            console.log('Response Data:', response.data);

            Cookies.set('token', response.data.token, { expires: 1 });
            Cookies.set('user', JSON.stringify(response.data.user), { expires: 1 });

            router.push('/profile');
        } catch (error: any) {
            console.error('Error:', error);
            if (error.response) {
                setServerError(error.response.data.message);
            } else {
                setServerError('Something went wrong. Please try again later.');
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg w-full h-[480px] max-w-md">
                <h2 className="text-2xl text-white font-bold mb-6 text-center">
                    One account. Any device. <br /> Just for you.
                </h2>
                {serverError && (
                    <div className="text-red-500 mb-4 text-center">
                        {serverError}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="w-full p-2 border border-gray-300 rounded-2xl"
                        />
                        {errors.email && (
                            <span className="text-red-500">Email is required</span>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-white mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            className="w-full p-2 border border-gray-300 rounded-2xl"
                        />
                        {errors.password && (
                            <span className="text-red-500">
                                Password is required
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
