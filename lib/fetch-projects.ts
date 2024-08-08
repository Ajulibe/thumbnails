import { prisma } from '../lib/prisma'

const fetchProjects = async () => {
  try {
    const projectData = await prisma.project.findMany();

    return JSON.parse(JSON.stringify(projectData))

  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchProjects;
