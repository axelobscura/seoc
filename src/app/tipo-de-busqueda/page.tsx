import Link from "next/link"

export default function TipoDeBusqueda() {
    
    return (
        <main className="grid grid-cols-2 min-h-screen flex-col items-center justify-center p-0">
          <Link href={{ pathname: '/tema' }}>
            <div className="flex min-h-screen bg-black hover:bg-white items-center justify-center">
              <h2 className="font-smooch font-bold text-white text-8xl">POR TEMA</h2>
            </div>
          </Link>
          <Link href={{ pathname: '/empresa' }}>
            <div className="flex min-h-screen bg-white hover:bg-black items-center justify-center">
              <h2 className="font-smooch font-bold text-black text-8xl">POR EMPRESA</h2>
            </div>
          </Link>
        </main>
    )
}
