"use client"
import Link from 'next/link'
import MenuSuperior from '../components/MenuSuperior'
import { FaArrowAltCircleRight } from "react-icons/fa"

export default function Fuente() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full" style={{
            background: 'url(/bkg_entrada_cat_item.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <MenuSuperior/>
            <Link href={`/secciones`}>
                <h3 className='font-smooch text-4xl text-gray-950 bg-white py-5 px-10 md:px-36 rounded-full shadow-lg mb-20'>FUENTE</h3>
            </Link>
            <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-10 mt-5 mx-10 my-5 w-full">
                <Link href={`/tema`}>
                  <button className="flex flex-row font-smooch text-4xl rounded-full bg-black px-0 py-5 mt-1 uppercase text-white hover:bg-gray-200 hover:text-gray-900 border border-gray-800 w-full text-center" style={{
                    boxShadow: '0 0 3px 3px rgba(5,5,5, 0.7)',
                  }}><FaArrowAltCircleRight className='absolute mx-0' /><span className='relative w-full'>ACI</span></button>
                </Link>
                <Link href={`/tema`}>
                  <button className="flex flex-row font-smooch text-4xl rounded-full bg-black px-0 py-5 mt-1 uppercase text-white hover:bg-gray-200 hover:text-gray-900 border border-gray-800 w-full text-center" style={{
                    boxShadow: '0 0 3px 3px rgba(5,5,5, 0.7)',
                  }}><FaArrowAltCircleRight className='absolute mx-0' /><span className='relative w-full'>ASTM</span></button>
                </Link>
                <Link href={`/tema`}>
                  <button className="flex flex-row font-smooch text-4xl rounded-full bg-black px-0 py-5 mt-1 uppercase text-white hover:bg-gray-200 hover:text-gray-900 border border-gray-800 w-full text-center" style={{
                    boxShadow: '0 0 3px 3px rgba(5,5,5, 0.7)',
                  }}><FaArrowAltCircleRight className='absolute mx-0' /><span className='relative w-full'>NMX</span></button>
                </Link>
                <Link href={`/tema`}>
                  <button className="flex flex-row font-smooch text-4xl rounded-full bg-black px-0 py-5 mt-1 uppercase text-white hover:bg-gray-200 hover:text-gray-900 border border-gray-800 w-full text-center" style={{
                    boxShadow: '0 0 3px 3px rgba(5,5,5, 0.7)',
                  }}><FaArrowAltCircleRight className='absolute mx-0' /><span className='relative w-full'>CFE</span></button>
                </Link>
                <Link href={`/tema`}>
                  <button className="flex flex-row font-smooch text-4xl rounded-full bg-black px-0 py-5 mt-1 uppercase text-white hover:bg-gray-200 hover:text-gray-900 border border-gray-800 w-full text-center" style={{
                    boxShadow: '0 0 3px 3px rgba(5,5,5, 0.7)',
                  }}><FaArrowAltCircleRight className='absolute mx-0' /><span className='relative w-full'>NTC</span></button>
                </Link>
                <Link href={`/tema`}>
                  <button className="flex flex-row font-smooch text-4xl rounded-full bg-black px-0 py-5 mt-1 uppercase text-white hover:bg-gray-200 hover:text-gray-900 border border-gray-800 w-full text-center" style={{
                    boxShadow: '0 0 3px 3px rgba(5,5,5, 0.7)',
                  }}><FaArrowAltCircleRight className='absolute mx-0' /><span className='relative w-full'>PCA</span></button>
                </Link>
                
            </div>
            <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-1 gap-10 mt-5 mx-10 my-5 w-full">
                <Link href={`/concreton`}>
                  <button className="flex flex-row font-smooch text-4xl rounded-full bg-black px-0 py-5 mt-1 uppercase text-white hover:bg-gray-200 hover:text-gray-900 border border-gray-800 w-full text-center" style={{
                    boxShadow: '0 0 3px 3px rgba(5,5,5, 0.7)',
                  }}><FaArrowAltCircleRight className='absolute mx-0' /><span className='relative w-full'>ASISTENTE CONCRETÓN SUPERVISOR</span></button>
                </Link>
            </div>
        </main>
    )
}
