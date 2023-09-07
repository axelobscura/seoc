"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../../components/Logo'

export default function Categoria() {
    const [capitulos, setCapitulos] = useState([
        'Capitulo 1-La supervision y el supervisor',
        'Capitulo 2-Conceptos estadisticos para el aseguramiento de la calidad',
        'Capitulo 3-Inspeccion y pruebas de los materiales',
        'Capitulo 4-Manejo y almacenamiento de los materiales',
        'Capitulo 5-conceptos fundamentales del concreto',
        'Capitulo 6-Proporcionamiento y control de las mezclas de concreto',
        'Capitulo 7-Dosificacion y mezclado',
        'Capitulo 8-Inspeccion antes de lña colocacion del comcreto',
        'Capitulo 9-Operaciones de colado del concreto',
        'Capitulo 10-Remocion de cimbras, reapuntalamiento, curado y proteccion',
        'Capitulo 11-Inspeccion del concreto posterior al colado'
    ])
    const params = useParams()
    let tit = params.categoria;
    let norm = params.norma;
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans font-extralight uppercase mb-5'>CAPÍTULOS {params.norma}</h2>
            {capitulos.map((val) => (
                <Link className='w-full' key={val} href={`/categorias/${tit}/${norm}/${val.split(' ').join('-').toLowerCase()}`}>
                    <button className="font-sans rounded-full bg-blue-950 px-5 py-2 mt-3 font-sans font-extralight w-full uppercase">{val}</button>
                </Link>
            ))}
        </main>
    )
}
