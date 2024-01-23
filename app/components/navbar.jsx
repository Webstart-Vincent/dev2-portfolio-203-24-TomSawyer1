import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
        <Link href={"/"} className='text-5xl text-white font-semibold'>Gooo</Link>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul>
                <li><Link href={"#about"} className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-red-500'>Sur moi</Link></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;