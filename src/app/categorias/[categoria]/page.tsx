"use client"
import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useCapitulos } from '../../../../lib/swr-hooks'
import Image from 'next/image'
import Search from '@/app/components/Search'
import Loader from '@/app/components/Loader'

export default function Categoria() {
    const params = useParams()
    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    const {capitulos, isLoading} = useCapitulos(search);

    if(isLoading){
        return(
            <Loader />
        )
    }

    let tit = params.categoria;
    let titulo = (tit as string).split('-').join(' ').toUpperCase()
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
            background: 'url(/bkg_entrada_cat_item.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <Image
                src='/logo_seoc_entrada.png'
                width='200'
                height='200'
                alt="seoc"
            />
            <p className='font-smooch text-4xl text-gray-900 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='font-smooch text-6xl text-bold text-uppercase text-gray-900 font-bold uppercase mb-0 mt-3 text-center bg-white px-20 py-2 rounded-lg'>COMITÉ</h2>
            {/* <h2 className='font-smooch text-6xl text-bold text-uppercase text-gray-900 font-bold uppercase mb-5 mt-3 text-center'>{titulo}</h2> */}
            {/* <Search/> */}
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                {capitulos.map((norma: any) => (
                    
                    <Link className='w-full' key={norma} href={`/fuente/aci`}>
                        <button className="font-smooch rounded-full bg-black hover:bg-gray-100 sm:px-0 md:px-0 py-1 font-extralight w-full uppercase text-white mb-0 hover:text-gray-900 px-20 mt-5">
                            <h3 className='text-3xl font-bold'>{norma.nombre}</h3>
                            <p className='text-2xl'>{norma.descripcion}</p>
                        </button>
                    </Link>
                ))}
            </div>
        </main>
    )
}
