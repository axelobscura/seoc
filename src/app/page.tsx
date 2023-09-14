import Logo from './components/Logo'
import Link from 'next/link'
import Search from './components/Search'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Logo/>
      <p className='font-sans text-gray-500 font-bold'><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
      <h1 className='text-4xl md:text-2md text-bold text-uppercase text-gray-500 font-sans font-extralight text-center uppercase mb-5'>Supervisor Especializado en Obras de Concreto</h1>
      <Search/>
      <Link href="/categorias">
        <button className="rounded-full bg-blue-950 px-32 py-2 mt-5 font-sans font-extralight">CATEGORÍAS</button>
      </Link>
    </main>
  )
}
