//PAGE DE DETAIL
// works/[slug]/page.jsx
import Navbar from '@/components/navbar';
import Detail from '@/components/detail';
import Footer from '@/components/footer';
import Project from '@/app/models/Project';
import dbConnect from '@/app/lib/mongoose';
// je recup un unique projet grace a un slug
async function getProject(slug) {
  await dbConnect();
  // findOne sert a filtrer
  const project = await Project.findOne({ slug }).lean();
  return JSON.parse(JSON.stringify(project));
}
// fct importante en next qui permet de recup le slug de l'url
export async function generateStaticParams() {
  // c une ligne qui permet de faire la connexion
  await dbConnect();
  
  const projects = await Project.find({}).select('slug').lean();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Details({ params }) {
  const project = await getProject(params.slug);
// jai un tableau qui sappelle project 
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container space-y-32 mt-24 mx-auto px-12 py-4">
      {/* je lui passe en props un tableau project */}
        <Detail project={project} />
      </div>
      <Footer />
    </main>
  );
}
