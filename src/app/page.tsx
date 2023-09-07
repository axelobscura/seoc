import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image 
        src="/logo_imcyc.webp"
        alt="Supervisor Especializado en Obras de Concreto, Instituto Mexicano del Cemento y del Concreto A.C."
        width="200"
        height="95"
        className='mb-5'
      />
      <h1 className='text-4xl text-bold text-uppercase text-gray-500 font-sans font-extralight uppercase'>Supervisor Especializado en Obras de Concreto</h1>
      <p className='font-sans text-gray-500 font-bold'><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
      <button className="rounded-full bg-blue-950 px-32 py-2 mt-5 font-sans font-extralight">CATEGORÍAS</button>
    </main>
  )
}
