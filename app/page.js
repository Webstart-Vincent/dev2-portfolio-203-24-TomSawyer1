import Image from 'next/image'
import Fsection from './components/fsection'
import Navbar from './components/navbar';
import { Container } from 'postcss';

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div class='container mx-auto px-12 py-4'>
      <Fsection />
      </div>
      
      

    </main>
  );
}
