import path from 'path';
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET (req: NextRequest, res: NextResponse) {
  const filePath = path.join(process.cwd(), 'public', 'Resume.pdf'); 
  if (!fs.existsSync(filePath)) {
    return new Response("File unavailable", {
      status: 400
    })
  }
  const file = fs.readFileSync(filePath);
  return new Response(file, {
    headers: {
        'Content-Type': 'application/pdf'
    }
  })
};
