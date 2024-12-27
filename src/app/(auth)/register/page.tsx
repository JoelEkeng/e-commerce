//@ts-nocheck
'use client'

import * as z from 'zod';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { registerSchema } from '@/(hooks)/zod';

type FormData = z.infer<typeof registerSchema>;


const Register: React.FC = () => {
    const [serverError, setServerError] = useState<string | null>(null);
       const router = useRouter();
   
       const {
           register,
           handleSubmit,
           formState: { errors },
       } = useForm<FormData>();

       const onSubmit: SubmitHandler<FormData> = async (data) => {
        setServerError(null); // Clear previous errors
        try {
            const response = await axios.post('https://e-commerce-mbyo.onrender.com/user/auth/register', data);
            console.log('Response Data:', response.data);

            router.push('/login');
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
        <>
        <div className="flex justify-center gap-12 items-center h-screen bg-black">
            <header>
                <h1 className="text-5xl text-white font-bold text-center">Samsung Account</h1>
            </header>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-900 text-black p-12 rounded-2xl shadow-md w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">One account. Any devicee. <br/> Just for you.</h2>
                {serverError && (
                    <div className="text-red-500 mb-4 text-center">
                        {serverError}
                    </div>
                )}
                <div className="mb-4">
                    <label className="block mb-2 text-white">Email</label>
                    <input type="email" {...register("email")} className="w-full p-2 border border-gray-300 rounded" />
                    {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white">Name</label>
                    <input type="text" {...register("name")} className="w-full p-2 border border-gray-300 rounded" />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white">Password</label>
                    <input type="password" {...register("password")} className="w-full p-2 border border-gray-300 rounded" />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>
                <button type="submit" className="w-full mt-12 p-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-700 font-bold text-xl">Next</button>
                
            <p className='text-white mt-8 text-center'>Have an account, <a href='/login' className='text-md underline'>Login</a></p>
            </form>

        </div>
        </>

    );
};

export default Register;
