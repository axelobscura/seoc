import { NextResponse } from "next/server";
import { query } from '../../../../lib/db'

export async function GET(request: Request) {
  const elPerfil = request.url.split('?')[1].split('=')[1];
  console.log('elPerfil', elPerfil)
  try {
    const results: any = await query(`
      SELECT * FROM perfil WHERE perfil='${elPerfil}'
    `)
    return NextResponse.json(results);
  } catch (e: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
  
}
