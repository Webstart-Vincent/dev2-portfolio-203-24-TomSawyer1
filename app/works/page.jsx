//PAGE LISTE DES 3 projets 

import Navbar from '../../components/navbar';
import Psection from '../../components/psection';
import Footer from '../../components/footer';

export default function Works() {
    return (
      
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div class='container space-y-32 mt-24 mx-auto px-12 py-4'>
        <Psection />
        
        </div>
        
        
        <Footer/>
      </main>
    );
  }