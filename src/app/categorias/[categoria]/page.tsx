"use client"
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCapitulos, useCapitulosAstm, useCapitulosCfe, useCapitulosNtc, useCapitulosPca } from '../../../../lib/swr-hooks';
import Image from 'next/image';
import Loader from '@/app/components/Loader';

export default function Categoria() {
    const [categoria, setCategoria] = useState<{ nombre: string }[]>([]);
    const searchParams = useSearchParams();
    const search = searchParams.get('id');
    const empresa = searchParams.get('empresa');
    const {capitulosAstm, isLoadingAstm} = useCapitulosAstm(search);
    const {capitulosCfe, isLoadingCfe} = useCapitulosCfe(search);
    const {capitulosNtc, isLoadingNtc} = useCapitulosNtc(search);
    const {capitulosPca, isLoadingPca} = useCapitulosPca(search);
    const {capitulos, isLoading} = useCapitulos(search);

    useEffect(() => {
        async function fetchPosts() {
          const res = await fetch(`/api/get-categoria?idcategoria=${search}`);
          const data = await res.json()
          setCategoria(data)
        }
        fetchPosts()
      }, []);

    if(isLoading || isLoadingAstm || isLoadingCfe || isLoadingNtc || isLoadingPca){
        return(
            <Loader />
        )
    }

    if (!categoria) return <Loader/>
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
            background: 'url(/bkg_entrada_cat_item.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <Image
                src='/logo_seoc_entrada.png'
                width='200'
                height='200'
                alt="seoc"
            />
            <p className='font-smooch text-4xl text-gray-900 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='font-smooch text-6xl text-bold text-uppercase text-gray-900 font-bold uppercase mb-0 mt-3 text-center bg-white px-20 py-2 rounded-full'>COMITÉ | {empresa}</h2>
            <p className='font-smooch text-2xl text-bold text-uppercase text-gray-900 font-bold uppercase mb-0 mt-3 text-center bg-white px-20 py-2 rounded-full'>{categoria[0]?.nombre}</p>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                {empresa === 'ASTM' && capitulosAstm.map((norma: any, index: any) => (
                    <Link 
                        className='w-full' 
                        key={index}
                        href={{
                            pathname: `/fuente/astm/${norma.nombre}`,
                            query: { 
                                idcategoria: search,
                                norma: norma.nombre,
                                id: norma.id,
                                empresa: empresa
                            },
                        }}
                    >
                        <button className="font-smooch rounded-full bg-black hover:bg-gray-100 sm:px-0 md:px-0 py-1 font-extralight w-full uppercase text-white mb-0 hover:text-gray-900 px-20 mt-5">
                            <h3 className='text-3xl font-bold'>{norma.nombre}</h3>
                            <p className='text-1xl'>{norma.descripcion}</p>
                        </button>
                    </Link>
                ))}
                {empresa === 'CFE' && capitulosCfe.map((norma: any, index: any) => (
                    <Link 
                        className='w-full' 
                        key={index}
                        href={{
                            pathname: `/fuente/cfe/${norma.nombre}`,
                            query: { 
                                idcategoria: search,
                                norma: norma.nombre,
                                id: norma.id,
                                empresa: empresa
                            },
                        }}
                    >
                        <button className="font-smooch rounded-full bg-black hover:bg-gray-100 sm:px-0 md:px-0 py-1 font-extralight w-full uppercase text-white mb-0 hover:text-gray-900 px-20 mt-5">
                            <h3 className='text-3xl font-bold'>{norma.nombre}</h3>
                            <p className='text-1xl'>{norma.descripcion}</p>
                        </button>
                    </Link>
                ))}
                {empresa === 'NTC' && capitulosNtc.map((norma: any, index: any) => (
                    <Link 
                        className='w-full' 
                        key={index}
                        href={{
                            pathname: `/fuente/ntc/${norma.nombre}`,
                            query: { 
                                idcategoria: search,
                                norma: norma.nombre,
                                id: norma.id,
                                empresa: empresa
                            },
                        }}
                    >
                        <button className="font-smooch rounded-full bg-black hover:bg-gray-100 sm:px-0 md:px-0 py-1 font-extralight w-full uppercase text-white mb-0 hover:text-gray-900 px-20 mt-5">
                            <h3 className='text-3xl font-bold'>{norma.nombre}</h3>
                            <p className='text-1xl'>{norma.descripcion}</p>
                        </button>
                    </Link>
                ))}
                {empresa === 'PCA' && capitulosPca.map((norma: any, index: any) => (
                    <Link 
                        className='w-full' 
                        key={index}
                        href={{
                            pathname: `/fuente/pca/${norma.nombre}`,
                            query: { 
                                idcategoria: search,
                                norma: norma.nombre,
                                id: norma.id,
                                empresa: empresa
                            },
                        }}
                    >
                        <button className="font-smooch rounded-full bg-black hover:bg-gray-100 sm:px-0 md:px-0 py-1 font-extralight w-full uppercase text-white mb-0 hover:text-gray-900 px-20 mt-5">
                            <h3 className='text-3xl font-bold'>{norma.nombre}</h3>
                            <p className='text-1xl'>{norma.descripcion}</p>
                        </button>
                    </Link>
                ))}
                {empresa === 'ACI' && capitulos.map((norma: any, index: any) => (
                    <Link 
                        className='w-full' 
                        key={index}
                        href={{
                            pathname: `/fuente/aci/${norma.nombre}`,
                            query: { 
                                idcategoria: search,
                                norma: norma.nombre,
                                id: norma.id,
                                empresa: empresa
                            },
                        }}
                    >
                        <button className="font-smooch rounded-full bg-black hover:bg-gray-100 sm:px-0 md:px-0 py-1 font-extralight w-full uppercase text-white mb-0 hover:text-gray-900 px-20 mt-5">
                            <h3 className='text-3xl font-bold'>{norma.nombre}</h3>
                            <p className='text-1xl'>{norma.descripcion}</p>
                        </button>
                    </Link>
                ))}
                
            </div>
        </main>
    )
}
