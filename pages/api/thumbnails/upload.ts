import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../lib/prisma';

const createThumbnail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { projectId, filename } = req.body;
    try {
      const thumbnail = await prisma.thumbnail.create({
        data: {
          filename: `thumb-${filename}`,
          project: {
            connect: { id: Number(projectId) },
          },
        },
      });
      res.status(201).json(thumbnail);
    } catch (error) {
      console.error('Error uploading thumbnail:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default createThumbnail;