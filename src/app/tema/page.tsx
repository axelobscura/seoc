"use client"
import Link from 'next/link'
import Search from '../components/Search'
//import { useCategorias } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuSuperior from '../components/MenuSuperior'
import { FaArrowAltCircleRight } from "react-icons/fa"
import { useSearchParams } from 'next/navigation'

export default function Tema() {
    const searchParams = useSearchParams();
    const [posts, setPosts] = useState([]);
    const empresa = searchParams.get('empresa');

    useEffect(() => {
        async function fetchPosts() {
            if(empresa === 'ASTM') {
                const res = await fetch('/api/get-categorias-astm')
                const data = await res.json()
                setPosts(data.reverse())
            } else if(empresa === 'NMX'){
                const res = await fetch('/api/get-categorias-nmx')
                const data = await res.json()
                setPosts(data.reverse())
            } else if(empresa === 'CFE'){
                const res = await fetch('/api/get-categorias-cfe')
                const data = await res.json()
                setPosts(data.reverse())
            } else if(empresa === 'PCA'){
                const res = await fetch('/api/get-categorias-pca')
                const data = await res.json()
                setPosts(data.reverse())
            } else if(empresa === 'NTC'){
                const res = await fetch('/api/get-categorias-ntc')
                const data = await res.json()
                setPosts(data.reverse())
            } else {
                const res = await fetch('/api/get-categorias')
                const data = await res.json()
                setPosts(data.reverse())
            }
        }
        fetchPosts()
    }, []);

    if (!posts) return <Loader/>

    if(posts.length === 0) {
        return <Loader/>
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full" style={{
            background: 'url(bkg_entrada_cat.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <MenuSuperior/>
            <Link href={`/`}>
                <Image
                    src='/logo_seoc_entrada.png'
                    width='200'
                    height='200'
                    alt="seoc"
                />
            </Link>
            <p className='font-smooch text-smooch text-sm md:text-2xl text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='font-smooch text-6xl text-gray-950 mb-2 border-b-2 border-gray-900 pb-3'>APRENDE O REFUERZA LO APRENDIDO</h2>
            <h3 className='font-smooch text-2xl text-gray-100 bg-gray-900 py-3 px-10 md:px-36 mb-2 rounded-full shadow-lg mt-3'>{empresa}</h3>
            <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-1 gap-10 mt-5 mx-10 my-5 w-full">
                <Link href={`/concreton`}>
                  <button className="flex flex-row font-smooch text-4xl rounded-full bg-black px-0 py-5 mt-1 uppercase text-white hover:bg-gray-200 hover:text-gray-900 border border-gray-800 w-full text-center" style={{
                    boxShadow: '0 0 3px 3px rgba(5,5,5, 0.7)',
                  }}><FaArrowAltCircleRight className='absolute mx-0' /><span className='relative w-full'>ASISTENTE CONCRETÓN SUPERVISOR</span></button>
                </Link>
            </div>
            <Link href={`/secciones`}>
                <h3 className='font-smooch text-2xl text-gray-950 bg-white py-3 px-10 md:px-36 mb-2 rounded-full shadow-lg mt-3'>SELECCIONA UN TEMA</h3>
            </Link>
            {/* <Search/> */}
            <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 w-full">
                {posts.map((val: any) => (
                    <Link 
                        key={val[0]} 
                        href={`/categorias/${val.url}?id=${val.id}&empresa=${empresa}`} 
                        className='flex flex-row items-center justify-center'
                    >
                        <FaArrowAltCircleRight style={{
                            fontSize: '0.5rem',
                            color: '#fff',
                            marginRight: '5px',
                            background: 'black',
                            borderRadius: '50%',
                            padding: '5px',
                        }} className='hover:bg-gray-200' />
                        <button className="font-smooch text-2xl rounded-full bg-black px-5 py-2 mt-1 w-full uppercase text-white font-bold hover:bg-gray-100 hover:text-gray-900 transition-all border border-gray-800 hover:border-slate-300 text-left">{val.nombre}</button>
                    </Link>
                )).reverse()}
            </div>
        </main>
    )
}
