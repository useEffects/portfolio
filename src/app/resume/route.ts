import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET (req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public', 'Resume.pdf'); 
  if (!fs.existsSync(filePath)) {
    return res.status(404).end();
  }
  const file = fs.readFileSync(filePath);
  return new Response(file, {
    headers: {
        'Content-Type': 'application/pdf'
    }
  })
};
