"use client"
import Link from 'next/link'
import Search from '../../components/Search'
//import { useCategorias } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuSuperior from '../../components/MenuSuperior'

export default function Fuente() {
    return (
        <main className="flex min-h-screen flex-col w-full" style={{
            background: 'url(/bkg_entrada_cat_det.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <MenuSuperior/>
            <div className="grid grid-cols-[4fr_1fr] gap-4 min-h-screen">
              <div className='flex flex-col items-center justify-center'>
                <h2 className='font-smooch text-left text-8xl uppercase flex justify-start py-10 w-full px-20'>Curado</h2>
                <Link href={`/`} className="font-smooch text-2xl rounded-full bg-black px-24 py-3 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACI 311-07</Link>
                <p className='font-smooch mt-5 py-3 text-4xl'>Manual para supervisar obras de concreto</p>
                <div className="grid grid-cols-2 gap-4 mt-5 w-full px-20">
                  <div>
                    <button className="font-smooch text-1xl rounded-full bg-blue-900 py-2 px-20 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Remoción de cimbras, reapuntalamiento, curado y
                    protección</button>
                  </div>
                  <div>
                    <button className="font-smooch text-1xl rounded-full bg-blue-900 py-2 px-20 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Métodos especiales de colocación del concreto</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-gray-900 bg-opacity-70 min-h-screen justify-center items-center">
                <div className="px-5">
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full">COMITÉ</button>
                  <div className='my-5'>
                    <button className="font-smooch text-2xl rounded-full bg-white py-2 px-20 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 w-full my-2">ACI 311-07</button>
                    <button className="font-smooch text-2xl rounded-full bg-white py-2 px-20 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 w-full my-2">ACI 302-04</button>
                  </div>
                </div>
                
              </div>
            </div>
        </main>
    )
}
