//@ts-nocheck

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Typography from '@mui/material/Typography';

const ProfilePage = () => {
    const [view, setView] = useState<'orders' | 'settings'>('orders');
    const [profileData, setProfileData] = useState({
        secondaryEmail: '',
        username: '',
        bio: '',
        links: [''],
    });
    const [user, setUser] = useState<{ name: string | null; email: string | null }>({
        name: null,
        email: null,
    });
    const [orders] = useState([
        { id: 1, name: 'Order #12345', date: 'Dec 20, 2024' },
        { id: 2, name: 'Order #12346', date: 'Dec 22, 2024' },
    ]);

    const router = useRouter();

    useEffect(() => {
        try {
            const userDataCookie = Cookies.get('user');
            const parsedUserData = JSON.parse(userDataCookie || '{}');
            setUser({
                name: parsedUserData.name || null,
                email: parsedUserData.email || null,
            });
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('user');
        router.push('/login');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLinkChange = (index: number, value: string) => {
        const updatedLinks = [...profileData.links];
        updatedLinks[index] = value;
        setProfileData((prev) => ({ ...prev, links: updatedLinks }));
    };

    const addNewLink = () => {
        setProfileData((prev) => ({ ...prev, links: [...prev.links, ''] }));
    };

    const saveProfileChanges = async () => {
        try {
            const response = await fetch('/api/update-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
                body: JSON.stringify(profileData),
            });

            if (response.ok) {
                alert('Profile updated successfully!');
            } else {
                alert('Failed to update profile. Please try again.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('An error occurred while updating your profile.');
        }
    };

    if (!user.name) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Typography variant="h5" className="text-gray-700">
                    You need to sign in to view this page.
                </Typography>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="w-1/4 bg-zinc-900 text-white p-6">
                <div className="text-center mb-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-sm text-gray-400">{user.email}</p>
                </div>
                <nav className="space-y-4">
                    <button
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                            view === 'orders' ? 'bg-blue-500' : 'hover:bg-zinc-800'
                        }`}
                        onClick={() => setView('orders')}
                    >
                        View Orders
                    </button>
                    <button
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                            view === 'settings' ? 'bg-blue-500' : 'hover:bg-zinc-800'
                        }`}
                        onClick={() => setView('settings')}
                    >
                        Settings
                    </button>
                    <button
                        className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-600"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {view === 'orders' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
                        <ul className="space-y-4">
                            {orders.map((order) => (
                                <li
                                    key={order.id}
                                    className="bg-white p-4 rounded-lg shadow-md flex justify-between"
                                >
                                    <span>{order.name}</span>
                                    <span className="text-gray-500">{order.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {view === 'settings' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Update Profile Settings</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                saveProfileChanges();
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block mb-2 text-gray-700">Secondary Email</label>
                                <input
                                    type="email"
                                    name="secondaryEmail"
                                    value={profileData.secondaryEmail}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter secondary email"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700">Preferred Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={profileData.username}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter preferred username"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700">Bio</label>
                                <textarea
                                    name="bio"
                                    value={profileData.bio}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Write something about yourself"
                                    rows={4}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700">
                                    Links to External Sites
                                </label>
                                {profileData.links.map((link, index) => (
                                    <div key={index} className="flex items-center mb-2">
                                        <input
                                            type="text"
                                            value={link}
                                            onChange={(e) =>
                                                handleLinkChange(index, e.target.value)
                                            }
                                            className="w-full p-2 border border-gray-300 rounded-lg"
                                            placeholder={`Link ${index + 1}`}
                                        />
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="text-blue-500 hover:underline"
                                    onClick={addNewLink}
                                >
                                    Add New Link
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
