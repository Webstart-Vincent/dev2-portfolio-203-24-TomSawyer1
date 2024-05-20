"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Nlink from './Nlink';
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import MenuOverlay from './MenuOverlay';

const navlinks = [
  {
    title: "About me !",
    path : "aboutme",
  },
  {
    title: "Projets",
    path : "works",
  },
  {
    title: "Github",
    path: "https://github.com/TomSawyer1",
  },
  {
    title:"Contact",
    path: "contacts",
  }
]

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8 py-4'>
        <Link href={"/"} className=' font-sans text-2xl md:text-5xl  font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-blue-800 to-red-500'>TAVS</Link>
       
       {
         <div className='mobile-menu block md:hidden'>
           {! navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
               <MenuIcon className='h-5 w-5'/> </button>
           ):(
           <button onClick={() => setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
           <XIcon className='h-5 w-5'/> </button>
           )
            } 
        </div>
         }

        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className=' flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {navlinks.map((link, index)  => (
                    <li key={index}>
                      <Nlink href={link.path} title={link.title} />
                    </li>
                  ))
                }
            </ul>
        </div>
        </div>
        { navbarOpen ? <MenuOverlay links={navlinks}/> : null}
    </nav>
  )
}

export default Navbar;
