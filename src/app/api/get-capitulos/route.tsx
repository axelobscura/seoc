import { NextResponse } from "next/server";
import { query } from '../../../../lib/db'

export async function GET(request: Request) {

  const id_categoria = 12;

  try {
    const results = await query(`
      SELECT * FROM capitulos WHERE id_categoria=${id_categoria} ORDER BY id ASC
    `)
    return NextResponse.json(results);
  } catch (e: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
