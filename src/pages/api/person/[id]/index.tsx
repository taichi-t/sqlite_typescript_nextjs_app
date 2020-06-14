import { NextApiRequest, NextApiResponse } from 'next';

export default function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'sorry we only accept GET requsts' });
  }
  res.json({ byId: req.query.id, message: 'getPersonById' });
}
