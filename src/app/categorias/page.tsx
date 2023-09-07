"use client"
import { useState } from 'react'
import Logo from '../components/Logo'

export default function Categorias() {
    const [categorias, setCategorias] = useState([
        'Supervisión',
        'Control de calidad',
        'Pruebas',
        'Prácticas estándar o recomendaciones',
        'Materiales',
        'Mezclas de concreto',
        'Mezclado de concreto',
        'Aditivos',
        'Transporte',
        'Bombeo',
        'Cimbras',
        'Colocación',
        'Compactación',
        'Curado',
        'Acabados',
        'Pavimentos',
        'Losas',
        'Mampostería',
        'Acero de refuerzo',
        'Concreto en clima frío',
        'Concreto en clima cálido',
        'Concreto precolado',
        'Concreto presforzado',
        'Concreto arquitectónico',
        'Concreto estructural',
        'Concreto ligero',
        'Concreto masivo',
    ])


    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans font-extralight uppercase'>CATEGORÍAS</h2>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            {categorias.map((val) => (
                <button key={val} className="rounded-full bg-blue-950 px-32 py-2 mt-3 font-sans font-extralight w-full">{val}</button>
            ))}
        </main>
    )
}
