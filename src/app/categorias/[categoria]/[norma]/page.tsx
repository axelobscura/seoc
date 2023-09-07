"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../../components/Logo'

export default function Categoria() {
    const [capitulos, setCapitulos] = useState([
        'Capítulo 1. La supervisión y el supervisor.',
        'Capítulo 2. Conceptos estadísticos para el aseguramiento de la calidad.',
        'Capítulo 3. Inspección y pruebas de los materiales.',
        'Capítulo 4. Manejo y almacenamiento de los materiales.',
        'Capítulo 5. conceptos fundamentales del concreto.',
        'Capítulo 6. Proporcionamiento y control de las mezclas de concreto.',
        'Capítulo 7. Dosificación y mezclado',
        'Capítulo 8. Inspección antes de lña colocación del comcreto.',
        'Capítulo 9. Operaciones de colado del concreto.',
        'Capítulo 10. Remoción de cimbras, reapuntalamiento, curado y protección.',
        'Capítulo 11. Inspección del concreto posterior al colado.'
    ])
    const params = useParams()
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans font-extralight uppercase mb-5'>CAPÍTULOS {params.norma}</h2>
            {capitulos.map((val) => (
                <Link className='w-full' key={val} href={`/categorias/`}>
                    <button className="font-sans rounded-full bg-blue-950 px-5 py-2 mt-3 font-sans font-extralight w-full uppercase">{val}</button>
                </Link>
            ))}
        </main>
    )
}
