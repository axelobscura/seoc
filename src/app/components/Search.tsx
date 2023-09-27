"use client";
import { useState, useEffect, useRef, RefObject } from 'react';
import { useCategorias } from '../../../lib/swr-hooks';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import Loader from './Loader';

export default function Search() {
  const {categorias, isLoading} = useCategorias();
  const router = useRouter()
  const myRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const [palabra, setPalabra] = useState('');

  useEffect(() => {
    console.log(categorias);
  }, [palabra])

  if(isLoading){
    return(
        <Loader />
    )
  }

  const buscar = (e: any) => {
    console.log(myRef.current?.value)
    router.push(`/dashboard/${myRef.current?.value}`)
  }

  const buscarPalabra = (e: any) => {
    setPalabra(e.target.value);
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
                  <div className='sm:w-3/4 md:w-2/3 py-3 px-10 bg-gray-900 rounded-full'>
                    <h3 className='font-sans font-extralight'>Resultados para: {palabra}</h3>
                    <p>Concreto</p>
                  </div>
                  
                </div>
              }
            </div>
            
        </label>
    </div>
  )
}