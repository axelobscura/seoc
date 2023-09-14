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
            <div>
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
            </div>
            {titulo === 'COLOCACION' && normas.map(norma => (
                <Link className='w-full' key={norma} href={`/categorias/${tit}/${norma.split(' ').join('-')}`}>
                    <button className="font-sans rounded-full bg-blue-950 px-5 py-2 mt-3 font-sans font-extralight w-full uppercase text-white">{norma}</button>
                </Link>
            ))}
        </main>
    )
}
