// /components/vueprojet.jsx
import React from 'react';
import Link from 'next/link';
// on recup le props , c un tab qu'on a appeler "project"
function Vueprojet({ project }) {
  return (
    <div className="bg-black rounded-lg h-[308px] p-4">
      <div className="grid grid-rows-[2fr_1fr] gap-4 h-full">
        <div className="bg-blue-500 rounded">
          {/* Contenu de la première ligne */}
        </div>
        <div className="flex justify-around items-center bg-[#121212] rounded p-4">
        {/* le titre du projet */}
          <h3 className="text-xl font-sans text-white">{project.title}</h3>
          {/* le link vers detail avec slug */}
          <Link href={`/works/${project.slug}`}>
            <button className="px-1 py-1 w-32 sm:w-32 rounded-full bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 hover:bg-slate-800 text-white">
              <span className="block bg-black hover:bg-slate-800 rounded-full py-3 px-2">Detail</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Vueprojet;
