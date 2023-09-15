"use client";
import { useRef, RefObject } from 'react';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter()
  const myRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  const buscar = (e: any) => {
    console.log(myRef.current?.value)
    console.log(router)
  }

  return(
    <div className='my-2 w-full'>
        <label className="flex items-center justify-center relative block">
            <span className="sr-only">Search</span>
            <input ref={myRef} className="placeholder:italic placeholder:text-slate-400 text-gray-900 block bg-white sm:w-full md:w-1/2 border border-slate-300 rounded-full py-5 px-7 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Buscar por contenidos..." type="text" name="search"/>
            <span className="inset-y-0 left-0 flex items-center" onClick={buscar}>
                <MagnifyingGlassCircleIcon className="h-16 w-16 text-gray-900 hover:text-slate-400 cursor-pointer shadow-sm"/>
            </span>
        </label>
    </div>
  )
}