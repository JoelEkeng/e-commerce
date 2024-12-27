import React from 'react';
import Image from 'next/image';
import Typography from '@mui/joy/Typography';
import { FaSearch, FaShoppingCart, FaRegUser  } from "react-icons/fa";
import {UserNav} from '@/components/(navComponents)/User';
import {ShopNav} from '@/components/(navComponents)/Shop';
import {AINav} from '@/components/(navComponents)/AI';
import {MobileNav} from '@/components/(navComponents)/Mobile';
import {TVAudioNav} from '@/components/(navComponents)/Tv-Audio';
import {Appliances} from '@/components/(navComponents)/Appliances';
import {Computing} from '@/components/(navComponents)/Computing';
import {Displays} from '@/components/(navComponents)/Displays';
import {Accessories} from '@/components/(navComponents)/Accessories';

const categories = [
    <ShopNav/>, <AINav />, <MobileNav/>, <TVAudioNav/>, <Appliances />, <Computing />, <Displays />, <Accessories/>
]


const icons = [
    <FaSearch />, <FaShoppingCart />, <UserNav />
]

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            
            <div>
                <Image src="/Logo.png" alt="logo" width={165} height={250} />
            </div>
            
                <div className='flex items-center'>
                {
                    categories.map((category) => (
                        <Typography level="body-md" className="font-bold">
                            {category}
                        </Typography>
                    ))
                }
                </div>
        
           
           
                <div className='flex justify-center'>
                {
                    icons.map((icon, index) => (
                        <p key={index}  className="text-2xl text-black mx-3">
                            {icon}
                        </p>
                    ))
                }
            </div>
           
            
        </div>
    );
}

export default Header;
