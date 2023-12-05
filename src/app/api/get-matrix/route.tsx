import { NextResponse } from "next/server";
import { query } from '../../../../lib/db'

export async function GET(request: Request) {
  const elIde = request.url.split('?')[1].split('=')[1];

  console.log('si llega: ', JSON.stringify(elIde));
  /*
  try {
    const results = await query(`
      'INSERT INTO table (x) VALUES(?)', [1]
    `)
    return NextResponse.json(results);
  } catch (e: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
  */
}
