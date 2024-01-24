import React from 'react';
import Image from 'next/image';

const Fsection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
        
      
        <h1 className="font-sans text-white mb-4 text-4xl sm:text-5xl lg:text-6xl">
           Salut c est Thomas
           </h1>

        <p className='text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Architecto ex, provident, quaerat odio maiores delectus officiis ullam pariatur facere quidem earum!
        Tempora explicabo repellat consequatur recusandae voluptatum! Consequuntur, eligendi cumque.
        </p>
        
        <div>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 hover:bg-slate-200 text-white'>
            Envoi 
          </button>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
            Mon CV
          </button>
        </div>
        </div>
        
        
          
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
          <Image 
          src="/images/me.jpg"
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