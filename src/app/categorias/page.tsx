"use client"
import { useState } from 'react'
import Logo from '../components/Logo'
import Link from 'next/link'
import Search from '../components/Search'

export default function Categorias() {
    const [categorias, setCategorias] = useState([
        'Supervision',
        'Control de calidad',
        'Pruebas',
        'Practicas estandar',
        'Materiales',
        'Mezclas de concreto',
        'Mezclado de concreto',
        'Aditivos',
        'Transporte',
        'Bombeo',
        'Cimbras',
        'Colocacion',
        'Compactacion',
        'Curado',
        'Acabados',
        'Pavimentos',
        'Losas',
        'Mamposteria',
        'Acero de refuerzo',
        'Concreto en clima frio',
        'Concreto en clima calido',
        'Concreto precolado',
        'Concreto presforzado',
        'Concreto arquitectonico',
        'Concreto estructural',
        'Concreto ligero',
        'Concreto masivo',
    ])
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans font-extralight uppercase mb-5'>CATEGORÍAS</h2>
            <Search/>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {categorias.map((val) => (
                    <Link key={val} href={`/categorias/${val.split(' ').join('-').toLowerCase()}`}>
                        <button className="font-sans rounded-full bg-blue-950 px-5 py-2 mt-1 font-sans font-extralight w-full uppercase text-white">{val}</button>
                    </Link>
                ))}
            </div>
        </main>
    )
}
