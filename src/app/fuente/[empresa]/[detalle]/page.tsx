"use client"
import Link from 'next/link'
import Search from '../../../components/Search'
//import { useCategorias } from '../../../lib/swr-hooks'
import { useContenido } from '../../../../../lib/swr-hooks'
import MenuSuperior from '../../../components/MenuSuperior'
import { useParams, useSearchParams } from 'next/navigation';
import Loader from '@/app/components/Loader'

export default function Detalle() {
    const params = useParams()
    const searchParams = useSearchParams();
  const norma = searchParams.get('norma');
  const id = searchParams.get('id');
    console.log(id);
    console.log(norma);
    const { contenido, isLoadingContenido } = useContenido(norma, id);

    if(isLoadingContenido){
        return(
            <Loader />
        )
    }

    return (
      <main className="flex min-h-screen flex-col w-full" style={{
        background: 'url(/bkg_entrada_cat_det.jpg) no-repeat center center fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
            <MenuSuperior/>
            <div className="grid grid-cols-[4fr_1fr] gap-4 min-h-screen">
              <div className='flex flex-col items-center justify-center'>
                <div className="grid grid-cols-1 gap-4 mt-0 w-full px-20">
                  <div className='flex flex-row items-center justify-start gap-3'>
                    <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-5 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 my-2">REMOCIÓN DE CIMBRAS, REAPUNTALAMIENTO,
                    CURADO Y PROTECCIÓN</button>
                    <button className="font-smooch text-2xl rounded-full bg-white py-2 px-5 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 my-2">CURADO</button>
                  </div>
                  <div className='bg-white bg-opacity-70 p-5 text-gray-900 py-9'>
                    {contenido.map((cont: any, index: any) => (
                      <div dangerouslySetInnerHTML={{__html: cont.contenido}}/>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-gray-900 bg-opacity-70 min-h-screen justify-center items-center">
                <div className="px-5">
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full">COMITÉ</button>
                  <div className='my-5'>

                  </div>
                  <Link href={`/fuente/aci/311/comparativa`} className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full">COMPARATIVA</Link>
                </div>
                
              </div>
            </div>
            
        </main>
    )
}
