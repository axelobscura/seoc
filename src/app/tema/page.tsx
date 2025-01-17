"use client"
import Link from 'next/link'
import Search from '../components/Search'
import { useCategorias } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'
import Image from 'next/image'

export default function Tema() {
    const {categorias, isLoadingCategorias} = useCategorias();
    if(isLoadingCategorias){
        return(
            <Loader />
        )
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Image
                src='/logo_seoc_entrada.png'
                width='200'
                height='200'
                alt="seoc"
            />
            <p className='font-smooch text-smooch text-2xl text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='font-smooch text-4xl text-bold text-uppercase text-gray-500 uppercase mb-5'>CATEGORÍAS</h2>
            <Search/>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                {categorias.map((val: any) => (
                    <Link key={val.id} href={`/categorias/${val.url}?id=${val.id}`}>
                        <button className="font-smooch text-2xl rounded-full bg-black px-5 py-2 mt-1 w-full uppercase text-white hover:bg-sky-950">{val.nombre}</button>
                    </Link>
                ))}
            </div>
        </main>
    )
}
