"use client"
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import MenuSuperior from '../../components/MenuSuperior';
import { useComite, useContenido } from '../../../../lib/swr-hooks';
import Loader from '@/app/components/Loader';

export default function Fuente() {
  const searchParams = useSearchParams();
  const norma = searchParams.get('norma');
  const id = searchParams.get('id');
  const { comite, isLoading } = useComite(norma, id);
  const { contenido, isLoadingContenido } = useContenido(norma, id);

  if (isLoading) {
    return (
      <Loader />
    )
  };

  if (isLoadingContenido) {
    return (
      <Loader />
    )
  };

  console.log("contenido: ",contenido);

  return (
    <main className="flex min-h-screen flex-col w-full" style={{
      background: 'url(/bkg_entrada_cat_det.jpg) no-repeat center center fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <MenuSuperior />
      <div className="grid grid-cols-[4fr_1fr] gap-4 min-h-screen">
        <div className='flex flex-col items-center justify-center'>
          <Link href={`/`} className="font-smooch text-4xl rounded-full bg-black px-24 py-3 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">{norma}</Link>
          <p className='font-smooch mt-5 py-3 text-4xl text-gray-800'>{comite.length && comite[0].descripcion}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 w-full px-20 bg-white bg-opacity-50 py-5">
            <div>
              {contenido && contenido.map((ent: any, index: any) => (
                <button key={index} className="font-smooch text-2xl sm:rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">
                  <Link href={`/fuente/aci/311`}>{ent.titulo}</Link>
                </button>
              ))};



              {/* <button className="font-smooch text-2xl sm:rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Remoción de cimbras, reapuntalamiento, curado y
                protección</button>
              <ul className="list-disc pl-10 font-smooch">
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Curado</Link>
                </li>
              </ul>
              <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Losas para edificios</button>
              <ul className="list-disc pl-10 font-smooch">
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Losas sobre terrenos</Link>
                </li>
              </ul>
              <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Losas de pavimento y tableros de puentes</button>
              <ul className="list-disc pl-10 font-smooch">
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Curado y protección</Link>
                </li>
              </ul>
              <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Concreto arquitectónico</button>
              <ul className="list-disc pl-10 font-smooch">
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Curado y protección</Link>
                </li>
              </ul> */}
            </div>
            {/* <div>
              <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Métodos especiales de colocación del concreto</button>
              <ul className="list-disc pl-10 font-smooch">
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Curado y protección</Link>
                </li>
              </ul>
              <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Tipos especiales de concreto</button>
              <ul className="list-disc pl-10 font-smooch">
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Concreto estructural con agregado de peso ligero</Link>
                </li>
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Concreto de baja masa volumétrica</Link>
                </li>
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Concreto pesado</Link>
                </li>
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Concreto de contracción compensada</Link>
                </li>
              </ul>
              <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Pruebas al concreto</button>
              <ul className="list-disc pl-10 font-smooch">
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Curado de especímenes a flexión</Link>
                </li>
                <li className="text-gray-900 text-2xl">
                  <Link href={`/fuente/aci/311`}>Curado acelerado de especímenes de prueba</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col bg-gray-900 bg-opacity-70 min-h-screen justify-center items-center">
          <div className="px-5">
            <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full">COMITÉ</button>
            <div className='my-5'>
              <button className="font-smooch text-2xl rounded-full bg-white py-2 px-10 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 w-full my-2">ACI 311-07</button>
              <button className="font-smooch text-2xl rounded-full bg-white py-2 px-10 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 w-full my-2">ACI 302-04</button>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
