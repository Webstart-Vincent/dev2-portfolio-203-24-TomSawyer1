"use client"
import React, { useEffect, useState } from 'react';
import Vueprojet from './vueprojet';

function Psection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      const data = await response.json();
      if (data.success) {
        setProjects(data.data);
      } else {
        console.error('Failed to fetch projects:', data.error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl font-sans text-white">Tableau de bord</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
      {/* map() sa sert a parcourir les projets , on lui passe un tableau en props */}
        {projects.map((project) => (
          <Vueprojet key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Psection;

