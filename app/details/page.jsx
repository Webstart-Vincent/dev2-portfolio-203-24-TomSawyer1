import Navbar from '@/components/navbar';
import Detail from '@/components/detail';
import Footer from '@/components/footer';

export default function Details() {
    return (
      
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div class='container space-y-32 mt-24 mx-auto px-12 py-4'>
        <Detail/>
        
        </div>
        
        
        <Footer/>
      </main>
    );
  }