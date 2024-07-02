"use client"
import React from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

// on recup le tableau
function Detail({ project }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-auto">
      <div>
      <CldImage
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1717446005/${project.imagee}.png`}
            alt="image-projet"
            className="rounded-lg w-full h-full object-center"
            width={200}
            height={200}
            priority
          />
      </div>
      <div className="flex flex-col place-content-center items-center">
        <h1 className="font-sans text-white mb-4 text-lg sm:text-2xl lg:text-3xl">{project.title}</h1>
        <div>
          {project.text}
        </div>
        <div>
          <Link href={project.site} passHref>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-black hover:bg-slate-800 rounded-full py-3 px-2'>Aller sur le site</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
