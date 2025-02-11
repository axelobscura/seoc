"use client"
import Link from 'next/link'
import Search from '../components/Search'
//import { useCategorias } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuSuperior from '../components/MenuSuperior'

export default function Secciones() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full" style={{
            background: 'url(/bkg_entrada_cat_item.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <MenuSuperior/>
            <Link href={`/secciones`}>
                <h3 className='font-smooch text-2xl text-gray-950 bg-white py-3 px-10 md:px-36 mb-2 rounded-full shadow-lg'>SELECCIONA TU FORMA DE ESTUDIO</h3>
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 mx-10">
                <div className='flex flex-col items-center justify-center bg-white bg-opacity-50 py-10 px-10 shadow-lg'>
                  <h4 className='font-smooch text-4xl text-gray-950 py-1 px-10 md:px-36 mb-2 border-b-2 border-gray-900 p-4'>PERFIL</h4>
                  <Image
                      src='/iconos/perfil_icono.png'
                      width='150'
                      height='150'
                      alt="seoc"
                      className='mb-1'
                  />
                  <Link href={`/`} className="font-smooch text-2xl rounded-full bg-black px-5 py-1 mt-1 w-full uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACEPTAR</Link>
                </div>
                <div className='flex flex-col items-center justify-center bg-white bg-opacity-50 py-10 px-10 shadow-lg'>
                  <h4 className='font-smooch text-4xl text-gray-950 py-1 px-10 md:px-36 mb-2 border-b-2 border-gray-900 p-4'>FUENTE</h4>
                  <Image
                      src='/iconos/fuente_icono.png'
                      width='120'
                      height='120'
                      alt="seoc"
                      className='mb-1'
                  />
                  <Link href={`/`} className="font-smooch text-2xl rounded-full bg-black px-5 py-1 mt-1 w-full uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACEPTAR</Link>
                </div>
                <div className='flex flex-col items-center justify-center bg-white bg-opacity-50 py-10 px-10 shadow-lg'>
                  <h4 className='font-smooch text-4xl text-gray-950 py-1 px-10 md:px-36 mb-2 border-b-2 border-gray-900 p-4'>PREGUNTA</h4>
                  <Image
                      src='/iconos/pregunta_icono.png'
                      width='150'
                      height='150'
                      alt="seoc"
                      className='mb-1'
                  />
                  <Link href={`/`} className="font-smooch text-2xl rounded-full bg-black px-5 py-1 mt-1 w-full uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACEPTAR</Link>
                </div>
            </div>
        </main>
    )
}
