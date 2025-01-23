import { NextResponse } from "next/server";
import { query } from '../../../../lib/db'

export async function GET(request: Request) {
  const params = request.url.split('?')[1];
  const elEmail = params.split('&')[0].split('=')[1];
  const elPwd = params.split('&')[1].split('=')[1];
  console.log(elEmail, elPwd);
  try {
    const results: any = await query(`
      SELECT * FROM usuarios WHERE email=${elEmail} AND password=${elPwd}
    `)
    return NextResponse.json(results);
  } catch (e: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}