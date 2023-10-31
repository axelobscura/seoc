"use client"
import { useParams } from 'next/navigation'
import { useContenidos } from '../../../../../lib/swr-hooks'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Logo from '../../../components/Logo'
import Loader from '@/app/components/Loader'
import Search from '@/app/components/Search'

export default function Categoria() {
    const params = useParams()
    let tit = params.categoria;
    let norm = params.norma;

    const {contenidos, isLoading} = useContenidos(norm);

    if(isLoading){
        return(
            <Loader />
        )
    }

    console.log('contenidos: ', contenidos)

    return (
        <main className="flex min-h-screen flex-col items-center justify-center sm:p-10 md:p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <Search />
            <h2 className='text-4xl text-bold text-uppercase text-gray-100 font-sans font-extralight uppercase mt-5 mb-3'>ACI {params.norma}</h2>
            <div className="grid grid-cols-1 gap-2">
                {contenidos.map((val: any) => (
                    <div key={val.id} className='my-3 bg-gray-900 p-5 shadow-sm'>
                        <div>
                            <h3 className='flex items-center'>
                                <ChevronRightIcon className="h-8 w-8 text-gray-300 hover:text-slate-400"/> 
                                {val.subcategoria}
                            </h3>
                            <h2 className='flex items-center text-2xl text-white py-3 bg-gray-800 my-3 p-3'>
                                <ChevronDownIcon className="h-8 w-8 mr-2 text-gray-300 hover:text-slate-400"/> 
                                {val.titulo}
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: val.contenido }} className='text-white'></div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
