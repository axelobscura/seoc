"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../components/Logo'
import Search from '@/app/components/Search'

export default function Categoria() {
    const [normas, setNormas] = useState([
        '311-07',
        '301-05',
        '302 IR-04',
        '304-00',
        '305 R-99',
        '306 88'
    ])
    const params = useParams()
    let tit = params.categoria;
    let titulo = (tit as string).split('-').join(' ').toUpperCase()
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-100 font-sans font-extralight uppercase mb-5 mt-3'>{titulo}</h2>
            <Search/>
            <h2 className='text-4xl text-bold text-uppercase text-gray-100 font-sans font-extralight uppercase mb-5 mt-3'>CAPÍTULOS</h2>
            <div className="grid grid-cols-3 gap-2">
                {titulo === 'COLOCACION' && normas.map(norma => (
                    <Link className='w-full' key={norma} href={`/categorias/${tit}/${norma.split(' ').join('-')}`}>
                        <button className="font-sans rounded-full bg-sky-700 px-20 py-5 mt-3 font-sans font-extralight w-full uppercase text-white">{norma}</button>
                    </Link>
                ))}
            </div>
        </main>
    )
}
