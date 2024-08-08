
export const addThumbnail = async (projectId, filename, project) => {
  try {
    const response = await fetch('/api/thumbnails/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectId, filename, project }),
    });

    if (!response.ok) {
      throw new Error('Failed to upload thumbnail');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error uploading thumbnail:', error);
    throw error;
  }
};