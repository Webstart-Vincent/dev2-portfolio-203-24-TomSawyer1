"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Fsection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
        
      
        <h1 className="font-sans text-white mb-4 text-4xl sm:text-5xl lg:text-6xl">
           Salut c'est <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-blue-800 to-red-500'>Thomas</span>

            <br/>
           <TypeAnimation
        sequence={[
          "Developper Web",
          1000, // Temps en seconde
          "Etudiant",
          1000,
          "BMW M3",
          1000,
        ]}   
        wrapper='span'
        speed={50}
        repeat={Infinity}
        />

           </h1>

        

        <p className='text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl'>
          Oui Oui c'est moi Thomas avec cette phrase que j'ai ecrit a la main  dsdsd 
        </p>
        
        <div>
          <Link href={"contacts"}>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 hover:bg-slate-200 text-white'>
            Contacter moi 
          </button>
          </Link>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-blue-800 to-red-500  hover:bg-slate-800 text-white  mt-3'>
           <span className=' block bg-black hover:bg-slate-800 rounded-full py-3 px-2'>Mon CV</span> 
          </button>
        </div>
        </div>
        
        
          
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
          <Image 
          src="/images/me2.PNG"
          alt="Thomas Lepage profile picture"
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={300}
          height={300}
          />
          </div>
        </div>
        </div>
    </section>
  );
};

export default Fsection;