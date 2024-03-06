import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Psection() {
  return (
    <div className=' grid grid-rows-[5fr_2fr] h-auto'>
      
        <div className='hidden sm:grid grid-cols-[2fr_1fr] gap-4 '>
            <div className='relative rounded w-full bg-black '>
            <Image
              src="/images/M32024.jpeg"
              alt="M32024"
              width={600}
              height={500}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <div className='flex flex-col place-content-center items-center'>
              <h1 className="font-sans text-white mb-4 text-lg sm:text-2xl lg:text-3xl"> Mes Projets</h1>

                <div className='relative place-content-center rounded w-36 h-20 bg-gradient-to-br from-blue-400 via-blue-800 to-red-500'>
                <Image
              src="/images/logo3pm1.png"
              alt="3pm"
              width={100} 
              height={100}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
                </div>

                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-blue-800 to-red-500  hover:bg-slate-800 text-white  mt-3'>
                <span className=' block bg-black hover:bg-slate-800 rounded-full py-3 px-2'>Aller sur le site</span> 
                </button>

                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-blue-800 to-red-500  hover:bg-slate-800 text-white  mt-3'>
                <span className=' block bg-black hover:bg-slate-800 rounded-full py-3 px-2'>
                  <Link href= "details">Details</Link></span> 
                </button>

            </div>
            </div>
            

            <div className='grid grid-rows-1 '>
              <div className='flex sm:hidden place-content-center'></div>
            <h1 className="font-sans  text-white mb-4 text-center text-3xl sm:hidden"> Mes Projets.</h1>
            
        <div className='flex flex-wrap place-content-center my-10 gap-4'>
          <Link href="https://mjm03.fr/dv22andrade/public/index.php">
            <div className='relative place-items-center rounded w-36 h-20 bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 hover:bg-slate-800'>
              <Image
              src="/images/logo3pm1.png"
              alt="3pm"
              width={100}
              height={100}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
             
            </div>
            </Link>
            <Link href="https://thomas-film-tmdb.netlify.app/">
            <div className='relative place-items-center rounded w-36 h-20 bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 hover:bg-slate-800'>
            <Image
              src="/images/tmdb.png"
              alt="film"
              width={100}
              height={100}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            </Link>
            <Link href="https://weather-meteo.netlify.app/">
            <div className='relative place-items-center rounded w-36 h-20 bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 hover:bg-slate-800'>
              <Image
              src="/images/ter2.png"
              alt="terre"
              width={100}
              height={100}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"     
             />
            </div>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Psection