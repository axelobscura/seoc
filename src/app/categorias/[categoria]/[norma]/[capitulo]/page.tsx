"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../../../components/Logo'

export default function Capitulo() {
    const params = useParams()
    let cap: string | any = params.capitulo
    let capi = cap.split('-').join(' ')
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans font-extralight uppercase mb-5'>NORMA {params.norma}</h2>
            <h2 className='text-2xl text-bold text-uppercase text-gray-500 font-sans font-extralight uppercase mb-5'>{capi}</h2>
        </main>
    )
}
