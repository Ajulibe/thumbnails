import { prisma } from './prisma';

const fetchThumbnailsByProjectId = async (projectId) => {
  try {
    const thumbnailsData = await prisma.thumbnail.findMany({
      where: { projectId: parseInt(projectId, 10) },
    });
    return thumbnailsData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchThumbnailsByProjectId;
