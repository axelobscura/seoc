import Logo from './components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import Search from './components/Search'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Logo/>
      <p className='font-sans text-gray-500 font-bold text-center mb-3'><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
      <h1 className='text-4xl md:text-2md text-bold text-uppercase text-gray-100 font-sans font-extralight text-center uppercase mb-5 mt-2'>Supervisor Especializado en Obras de Concreto</h1>
      <h3 className='text-2xl text-gray-300'>SELECCIONA TU PERFIL</h3>
      <p className='text-gray-400 my-3 uppercase text-center'>Cada perfil tiene contenidos específicos.<br/>Si quieres cambiar de perfil, no te preocupes, podrás hacerlo sin problemas.</p>
      <div className='flex flex-col sm:flex-row my-3 avatares'>
        <div className='m-2'>
          <Link href='/categorias'>
            <div className="hover:cursor-pointer flex flex-col justify-center items-center bg-gray-800 hover:bg-gray-500 p-3 rounded-lg">
              <Image 
                priority={true}
                src='/avatar-1.jpg' 
                width='200' 
                alt='Supervisor Especializado en Obras de Concreto' 
                height='200' 
                className='rounded-full mx-2 shadow' 
              />
              <p className='p-3 text-white rounded-lg font-sans uppercase'>JEFE DE OBRA</p>
            </div>
          </Link>
        </div>
        <div className='m-2'>
          <Link href='/categorias'>
            <div className="hover:cursor-pointer flex flex-col justify-center items-center bg-gray-800 hover:bg-gray-500 p-3 rounded-lg">
              <Image 
                priority={true}
                src='/avatar-2.jpg' 
                width='200' 
                alt='Supervisor Especializado en Obras de Concreto' 
                height='200' 
                className='rounded-full mx-2 shadow' 
              />
              <p className='p-3 text-white rounded-lg font-sans uppercase'>PLANIFICADOR DE OBRA</p>
            </div>
          </Link>
        </div>
        <div className='m-2'>
          <Link href='/categorias'>
            <div className="hover:cursor-pointer flex flex-col justify-center items-center bg-gray-800 hover:bg-gray-500 p-3 rounded-lg">
              <Image 
                priority={true}
                src='/avatar-3.jpg' 
                width='200' 
                alt='Supervisor Especializado en Obras de Concreto' 
                height='200' 
                className='rounded-full mx-2 shadow' 
              />
              <p className='p-3 text-white rounded-lg font-sans uppercase'>SUPERVISOR DE OBRA</p>
            </div>
          </Link>
        </div>
        <div className='m-2'>
          <Link href='/categorias'>
            <div className="hover:cursor-pointer flex flex-col justify-center items-center bg-gray-800 hover:bg-gray-500 p-3 rounded-lg">
              <Image 
                priority={true}
                src='/avatar-4.jpg' 
                width='200' 
                alt='Supervisor Especializado en Obras de Concreto' 
                height='200' 
                className='rounded-full mx-2 shadow' 
              />
              <p className='p-3 text-white rounded-lg font-sans uppercase'>MAESTRO DE OBRA</p>
            </div>
          </Link>
        </div>
      </div>
      {/* 
      <Search/>
      <Link href="/categorias">
        <button className="rounded-full bg-blue-950 px-32 py-2 mt-5 font-sans font-extralight text-white">CATEGORÍAS</button>
      </Link>
      */}
    </main>
  )
}
