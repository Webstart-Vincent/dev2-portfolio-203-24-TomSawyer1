import Image from 'next/image'
import Fsection from './components/fsection'
import Navbar from './components/navbar';
import Psection from './components/psection';
import Footer from './components/footer';
import { Container } from 'postcss';

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div class='container space-y-32 mt-24 mx-auto px-12 py-4'>
      <Fsection />
      <Psection />
      </div>
      
      
      <Footer/>
    </main>
  );
}
