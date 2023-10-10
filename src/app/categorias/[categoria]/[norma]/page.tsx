"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../../components/Logo'

export default function Categoria() {
    const params = useParams()
    let tit = params.categoria;
    let norm = params.norma;
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-100 font-sans font-extralight uppercase mt-5 mb-3'>ACI {params.norma}</h2>


            {/* 
            <div className="grid grid-cols-3 gap-2">
                {capitulos.map((val) => (
                    <Link className='w-full' key={val} href={`/categorias/${tit}/${norm}/${val.split(' ').join('-').toLowerCase()}`}>
                        <button className="font-sans rounded-full bg-blue-950 px-5 py-2 mt-3 font-sans font-extralight w-full uppercase">{val}</button>
                    </Link>
                ))}
            </div>
            */}
        </main>
    )
}
