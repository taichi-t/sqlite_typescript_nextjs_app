import { NextApiRequest, NextApiResponse } from 'next';

const sqlite = require('sqlite3').verbose();

export default async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'sorry we only accept GET requsts' });
  }
  const db = new sqlite.Database('example.sqlite');

  db.all('SELECT * FROM Person', (error: any, row: any) => {
    res.json(row);
  });
}
