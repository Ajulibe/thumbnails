import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../lib/prisma';

const deleteThumbnail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const { id } = req.body;
    try {
      await prisma.thumbnail.delete({
        where: { id: parseInt(id, 10) },
      });
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting thumbnail:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default deleteThumbnail;