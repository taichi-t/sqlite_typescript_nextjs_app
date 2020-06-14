import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllVehicle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'sorry we only accept GET requsts' });
  }
  res.json({ hello: 'world', methjod: req.method });
}
