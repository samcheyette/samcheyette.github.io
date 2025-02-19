import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const papers = await fs.readdir(path.join(process.cwd(), 'public/papers'));
    const pdfPapers = papers.filter(file => file.endsWith('.pdf'));
    return NextResponse.json(pdfPapers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch papers' }, { status: 500 });
  }
} 