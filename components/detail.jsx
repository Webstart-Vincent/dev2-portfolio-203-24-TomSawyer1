import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Detail()  {
    return (
        <div className="grid grid-cols-2 h-auto bg-blue-300">
            <div>

            </div>
            <div class='flex flex-col place-content-center items-center'>
            <h1 className="font-sans text-white mb-4 text-lg sm:text-2xl lg:text-3xl"> Projets*</h1>

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius perspiciatis assumenda unde expedita necessitatibus eaque saepe tenetur quisquam accusamus.
                    Possimus commodi non rem praesentium aliquam perspiciatis nulla quod, consequatur ex.
                </div>
                <div>

                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-blue-800 to-red-500  hover:bg-slate-800 text-white  mt-3'>
                <span className=' block bg-black hover:bg-slate-800 rounded-full py-3 px-2'>Aller sur le site</span> 
                </button>

                </div>
            </div>
        </div>
    );
};
export default Detail;
