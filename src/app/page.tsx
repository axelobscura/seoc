"use client"
import { useState } from 'react'
import Logo from './components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import Search from './components/Search'


export default function Home() {



  const registro = () => {
    console.log('registro')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(bkg_entrada.jpg) no-repeat center center fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'contain',
    }}>
      <div className='login' style={{
        'marginLeft': '55%'
      }}>
        <Image
          src='/logo_seoc_entrada.png'
          width='300'
          height='300'
          alt="seoc"
        />
        <form className='mx-5 mt-3'>
          <div className="mb-2">
            <label className="block font-medium text-gray-500">Correo electrónico:</label>
            <input className="block w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900" type="email" id="email" name="email" />
          </div>
          <div className="mb-2">
            <label className="block font-medium text-gray-500">Contraseña:</label>
            <input className="block w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900" type="password" id="password" name="password" />
          </div>
          <button className="bg-black text-white rounded-full py-2 px-4 w-full mt-5" type="submit">INGRESAR</button>
        </form>
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
