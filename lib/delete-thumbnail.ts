export const deleteThumbnail = async (id) => {
  try {
    const response = await fetch('/api/thumbnails/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error('Failed to delete thumbnail');
    }
  } catch (error) {
    console.error('Error deleting thumbnail:', error);
    throw error;
  }
};
