"use client"
import { useState } from 'react'
import Logo from './components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import Search from './components/Search'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(bkg_entrada.jpg) no-repeat center center fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'contain',
    }}>
      <div className='flex items-center flex-col login' style={{
        'marginLeft': '55%'
      }}>
        <Image
          src='/logo_seoc_entrada.png'
          width='400'
          height='400'
          alt="seoc"
        />
        <Link href='/login'>
          <button className="bg-black text-white rounded-full py-2 px-20 mt-5 mr-7 ml-7" type="submit">INGRESAR</button>
        </Link>
      </div>
    </main>
  )
}
