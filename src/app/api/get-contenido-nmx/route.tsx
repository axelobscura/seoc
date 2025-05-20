import { NextResponse } from "next/server";
import { query } from '../../../../lib/db'

export async function GET(request: Request) {
  const id = request.url.split('&')[1].split('=')[1];
  const norma = request.url.split('?')[1].split('=')[1];
  try {
    const results = await query(`
      SELECT * FROM contenido_nmx WHERE id_categoria='${id}' AND norma='${norma.split('&')[0].replace(/%C3%AD/g, 'í').replace(/%20/g, ' ')}' ORDER BY id ASC
    `)
    return NextResponse.json(results);
  } catch (e: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
