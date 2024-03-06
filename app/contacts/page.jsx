
import Navbar from '@/components/navbar';
import Contact from '@/components/contacts';
import Footer from '@/components/footer';

// Remplacez le nom de la fonction exportée de Contact à ContactPage
export default function ContactPage() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          <div class='container space-y-32 mt-24 mx-auto px-12 py-4'>
              <Contact /> {/* Utilisez le composant Contact ici */}
          </div>
          <Footer />
      </main>
  );
}

