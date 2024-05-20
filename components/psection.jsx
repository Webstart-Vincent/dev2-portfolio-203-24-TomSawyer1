import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Vueprojet from './vueprojet';

function Psection() {
  return (
    <div>
      <div className="flex justify-center">
  <h1 className="text-4xl font-sans text-white">Tableau de bord</h1>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        <Vueprojet />
        <Vueprojet />
        <Vueprojet />
      </div>
    </div>
  );
}

export default Psection;
