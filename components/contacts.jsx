import React from 'react';
import  Link  from "next/link";
import Image from "next/image";


function Contacts() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-auto ">
            <div></div>
            <div>
            <div className="max-w-md mx-auto mt-10 p-4 rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-xl text-white font-semibold mb-4">Your email</h2>
        <textarea 
          className="w-full p-2 h-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tapez votre texte ici..."
        ></textarea>
      </div>
      <div className="mb-6">
        <h2 className="text-xl text-white font-semibold mb-4">Subject</h2>
        <textarea 
          className="w-full p-2 h-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tapez votre texte ici..."
        ></textarea>
      </div>
      <div className="mb-6">
        <h2 className="text-xl text-white font-semibold mb-4">Message</h2>
        <textarea 
          className="w-full p-2 h-40 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tapez votre texte ici..."
        ></textarea>
      </div>
      <button className="w-full py-2 mt-4 bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Send Me
      </button>
    </div>
            </div>
    </div>
    );
};
export default Contacts;