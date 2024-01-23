import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Mon Portfolio</h1>
      <Link href="/pages/projets">Voir mes projets</Link>
    </div>
  );
};

export default HomePage;