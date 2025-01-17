"use client"
import Link from 'next/link'
import Logo from '../components/Logo'
import Search from '../components/Search'
import { useCategorias } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'

export default function Tema() {
    const {categorias, isLoadingCategorias} = useCategorias();
    if(isLoadingCategorias){
        return(
            <Loader />
        )
    };
    console.log(categorias);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='text-smooch font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans uppercase mb-5'>CATEGORÍAS</h2>
            <Search/>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {categorias.map((val: any) => (
                    <Link key={val.id} href={`/categorias/${val.url}?id=${val.id}`}>
                        <button className="text-smooch rounded-full bg-sky-900 px-5 py-2 mt-1 w-full uppercase text-white hover:bg-sky-950">{val.nombre}</button>
                    </Link>
                ))}
            </div>
        </main>
    )
}
