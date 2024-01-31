import React from 'react'

function Psection() {
  return (
    <div className=' grid grid-rows-[5fr_2fr] h-auto'>
        <div className='grid grid-cols-[2fr_1fr] gap-4 bg-blue-500'>
            <div className='rounded w-full bg-black'>
            </div>

            <div className='flex flex-col place-content-center items-center'>
                <div className='rounded w-36 h-20 bg-black'></div>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-blue-800 to-red-500  hover:bg-slate-800 text-white  mt-3'>
                <span className=' block bg-black hover:bg-slate-800 rounded-full py-3 px-2'>Aller sur le site</span> 
                </button>
            </div>
            
            
        </div>
        <div className='flex flex-wrap place-content-center my-3 gap-4'>
            <div className='rounded w-36 h-20 bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 hover:bg-slate-800'></div>
            <div className='rounded w-36 h-20 bg-black'></div>
            <div className='rounded w-36 h-20 bg-black'></div>
            
        </div>
    </div>
  )
}

export default Psection