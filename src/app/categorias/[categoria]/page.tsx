"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../components/Logo'

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
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans font-extralight uppercase mb-5'>{titulo}</h2>
            {titulo === 'COLOCACION' && normas.map(norma => (
                <button key={norma} className="font-sans rounded-full bg-blue-950 px-5 py-2 mt-3 font-sans font-extralight w-full uppercase">{norma}</button>
            ))}
        </main>
    )
}
