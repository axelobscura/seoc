"use client"
import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useCapitulos } from '../../../../lib/swr-hooks'
import Logo from '../../components/Logo'
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
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-100 font-sans font-extralight uppercase mb-5 mt-3 text-center'>{titulo}</h2>
            <Search/>
            <h2 className='text-4xl text-bold text-uppercase text-gray-100 font-sans font-extralight uppercase mb-5 mt-3'>CAPÍTULOS</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2">
                {capitulos.map((norma: any) => (
                    <Link className='w-full' key={norma} href={`/categorias/${tit}/${norma.nombre}`}>
                        <button className="font-sans rounded-full bg-sky-700 sm:px-10 md:px-20 py-2 mt-3 font-sans font-extralight w-full uppercase text-white" style={{'height': '90px'}}><h3 className='text-2xl'>{norma.nombre}</h3><p className='text-xxs'>{norma.descripcion}</p></button>
                    </Link>
                ))}
            </div>
        </main>
    )
}
