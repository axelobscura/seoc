"use client"
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Logo from '../../components/Logo'

export default function Categoria() {
    const params = useParams()
    let tit = params.categoria;
    let titulo = (tit as string).split('-').join(' ').toUpperCase()
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans font-extralight uppercase mb-5'>{titulo}</h2>
        </main>
    )
}
