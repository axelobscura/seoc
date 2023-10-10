"use client"
import { useCategorias } from '../../../lib/swr-hooks'
import Link from 'next/link'
import Logo from '../components/Logo'
import Search from '../components/Search'
import Loader from '../components/Loader'

export default function Categorias() {
    const {categorias, isLoading} = useCategorias();

    if(isLoading){
        return(
            <Loader />
        )
    }
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-100 font-sans font-extralight uppercase mb-5 mt-2'>CATEGORÍAS</h2>
            <Search/>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {categorias.map((val: any) => (
                    <Link key={val.id} href={`/categorias/${val.url}?id=${val.id}`}>
                        <button className="font-sans rounded-full bg-sky-900 px-5 py-2 mt-1 font-sans font-extralight w-full uppercase text-white hover:bg-sky-950">{val.nombre}</button>
                    </Link>
                ))}
            </div>
        </main>
    )
}
