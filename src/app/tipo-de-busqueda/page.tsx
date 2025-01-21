import Link from "next/link"
import Image from 'next/image'

export default function TipoDeBusqueda() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <Image
              src='/logo_seoc_entrada.png'
              width='200'
              height='200'
              alt="seoc"
          />
          <p className='font-smooch text-smooch text-2xl text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
          <h2 className='font-smooch text-4xl text-bold text-uppercase text-gray-500 uppercase mb-5'>BUSCAR POR</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <Link href={{ pathname: '/tema' }}>
              <div className="flex bg-gray-100 hover:bg-gray-200 items-center justify-center px-5">
                <h2 className="font-smooch font-bold text-gray-900 hover:text-gray-900  text-8xl">POR TEMA</h2>
              </div>
            </Link>
            <Link href={{ pathname: '/empresa' }}>
              <div className="flex bg-white hover:bg-gray-700 items-center justify-center px-5">
                <h2 className="font-smooch font-bold text-black hover:text-gray-100 text-8xl">POR EMPRESA</h2>
              </div>
            </Link>
          </div>
      </main>
    )
}
