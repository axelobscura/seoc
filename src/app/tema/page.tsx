"use client"
import Link from 'next/link'
import Search from '../components/Search'
//import { useCategorias } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuSuperior from '../components/MenuSuperior'
import { FaArrowAltCircleRight } from "react-icons/fa"

export default function Tema() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
          const res = await fetch('/api/gets-capitulos')
          const data = await res.json()
          setPosts(data.reverse())
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
            <Link href={`/secciones`}>
                <h3 className='font-smooch text-2xl text-gray-950 bg-white py-3 px-10 md:px-36 mb-2 rounded-full shadow-lg mt-3'>SELECCIONA UN TEMA</h3>
            </Link>
            {/* <Search/> */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-5">
                {posts.map((val: any) => (
                    // <Link key={val[0]} href={`/categorias/${val[1]}?id=${val[0]}`} className='flex flex-row items-center justify-center'>
                    <Link key={val[0]} href={`/categorias/supervision?id=1`} className='flex flex-row items-center justify-center'>
                        <FaArrowAltCircleRight style={{
                            fontSize: '2.5rem',
                            color: '#fff',
                            marginRight: '5px',
                            background: 'black',
                            borderRadius: '50%',
                            padding: '5px',
                        }} className='hover:bg-gray-200' />
                        <button className="font-smooch text-2xl rounded-full bg-black px-5 py-2 mt-1 w-full uppercase text-white font-bold hover:bg-gray-100 hover:text-gray-900 transition-all border border-gray-800 hover:border-slate-300 text-left">{val[2]}</button>
                    </Link>
                )).reverse()}
            </div>
        </main>
    )
}
