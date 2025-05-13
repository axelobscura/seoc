import { NextResponse } from "next/server";
import { query } from '../../../../lib/db'

export async function GET(request: Request) {
  const id = request.url.split('?')[1].split('=')[1];
  try {
    const results = await query(`
      SELECT * FROM comites_cfe WHERE id_categoria='${id}' ORDER BY id ASC
    `)
    return NextResponse.json(results);
  } catch (e: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
