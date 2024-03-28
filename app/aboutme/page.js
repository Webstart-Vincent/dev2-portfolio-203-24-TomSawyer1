import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Aboutsec from '@/components/aboutsec';

export default function Aboutme() {
    return (
      
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className='container space-y-32 mt-24 mx-auto px-12 py-4'>

        <Aboutsec/>
        
        </div>
        
        
        <Footer/>
      </main>
    );
  }