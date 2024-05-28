// /pages/api/projects.js
import dbConnect from '@/lib/mongoose';
import Project from '@/models/Project';

export default async function handler(req, res) {
  const { method, body } = req;

  await dbConnect();

  if (method === 'POST') {
    try {
      const project = await Project.create(body); // créer un projet
      res.status(201).json({ success: true, data: project });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } 
  
// request qui permet de recup tt les projets 
  if (method === 'GET') {
    try {
      // find ca sert a tt recup
      const projects = await Project.find({}); // Récupère tous les projets
      res.status(200).json({ success: true, data: projects });
    } catch (error) {
      res.status(400).json({ success: false, error: "Impossible de récupérer les projets" });
    }
  }
}
