import React from 'react'
import { Typography, Button } from '@mui/joy'
import Link from 'next/link';

function Header() {
    return (
    <main className='container flex justify-between items-center mx-auto p-8'>
        <Typography level="h3">SAMSUNG Admin Page</Typography>
        <div className='flex justify-between gap-4'>
            <Link href='/admin/login'>
            <Button variant='outlined' className='rounded-2xl'>Log in</Button>
            </Link>
         
        </div>
    </main>
  )
}

export default Header