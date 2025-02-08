"use client";
import { useState, useEffect, useRef, RefObject } from 'react';
import Link from 'next/link';
import { useCategorias } from '../../../lib/swr-hooks';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import Loader from './Loader';

type Filtro = {
  id: number;
  nombre: string;
};

export default function Search() {
  const {categorias, isLoadingCategorias} = useCategorias();
  const router = useRouter()
  const myRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const [palabra, setPalabra] = useState('');
  const [filtro, setFiltro] = useState<Filtro[]>([]);

  useEffect(() => {
  }, [palabra])

  if(isLoadingCategorias){
    return(
        <Loader />
    )
  }

  const buscar = (e: any) => {
    router.push(`/dashboard/${myRef.current?.value}`)
  }

  const buscarPalabra = (e: any) => {
    setPalabra(e.target.value);
    setFiltro(
      categorias.filter((categoria: any) => {
        return categoria.nombre.includes(palabra)
      })
    )
  }

  return(
    <div className='my-2 w-full'>
        <label className="flex items-center justify-center relative block">
            <span className="sr-only">Search</span>
            <div className='flex flex-col w-full'>
              <div className="flex items-center justify-center relative block w-full">
                <input ref={myRef} className="placeholder:italic placeholder:text-slate-400 text-gray-900 block bg-white sm:w-3/4 md:w-1/2 border border-slate-300 rounded-full py-5 px-7 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Buscar por tema..." type="text" name="search" onKeyUp={buscarPalabra}/>
                <span className="inset-y-0 left-0 flex items-center" onClick={buscar}>
                  <MagnifyingGlassCircleIcon className="h-16 w-16 text-gray-900 hover:text-slate-400 cursor-pointer shadow-sm"/>
                </span>
              </div>
              {palabra.length >= 1 &&
                <div className='flex items-center justify-center flex-col'>
                  <div className='sm:w-3/4 md:w-2/3 py-3 px-1 bg-transparent rounded-md'>
                    <h3 className='font-smooch text-gray-900 font-bold text-2xl'>Resultados para: {palabra}</h3>
                    {filtro.length >= 1 && filtro.map(filtroCat => (
                      <Link key={filtroCat?.nombre} href={`/categorias/${(filtroCat?.nombre).split(' ').join('-').toLowerCase()}?id=${filtroCat?.id}`}>
                        <p className='font-smooch text-2xl text-white p-1 bg-gray-700 hover:bg-gray-800 my-2 rounded-xl px-3'>{filtroCat?.nombre}</p>
                      </Link>
                    ))}
                  </div>
                  
                </div>
              }
            </div>
            
        </label>
    </div>
  )
}