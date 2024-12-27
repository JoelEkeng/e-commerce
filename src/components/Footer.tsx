import React from 'react'
import Typography from '@mui/joy/Typography';
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa6";


const Footer = () => {
    const socials = [
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/joel-ekeng/"
        },
        {
            icon: <FaWhatsapp />,
            link: "https://wa.me/233201964305"
        },
        {
            icon: <FaGithub />,
            link: "@JoelEkeng"
        }
    ]

  return (
    <footer className='pt-24 px-4 flex justify-evenly items-center'>
        <Typography level="body-sm" component="h1" textAlign="end" gutterBottom>
        &copy; Ekeng Joel FInal Year Examination on Cloud Application
        </Typography>
        <div className="flex justify-center">
            {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-2xl text-black mx-3">
                    {social.icon}
                </a>
            ))}
        </div>
    </footer>
  )
}

export default Footer