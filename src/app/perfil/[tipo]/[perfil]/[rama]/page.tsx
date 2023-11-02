"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useCategorias } from '../../../../../../lib/swr-hooks'
import { useComites } from '../../../../../../lib/swr-hooks'
import Image from 'next/image'
//import { usePerfil } from '../../../../../lib/swr-hooks'
import LogoSeoc from '@/app/components/LogoSeoc'
import Loader from '@/app/components/Loader'

export default function Rama() {
  const {categorias, isLoadingCategorias} = useCategorias();
  const {comites, isLoadingComites} = useComites();
  const params = useParams()
  let rama: any = params.rama;
  let perfil: any = params.perfil;
  let upperCaseText: string = perfil.toUpperCase();
  let ramaUpperCase: string = rama.toUpperCase() + 'S';
  if(perfil === 'supervisor'){
    upperCaseText = upperCaseText + ' DE OBRAS DE CONCRETO'
  }
  if(perfil === 'analista'){
    upperCaseText = upperCaseText + ' DE CALIDAD'
  }
  if(isLoadingCategorias){
    return(
        <Loader />
    )
  }
  if(isLoadingComites){
    return(
        <Loader />
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12" style={{
      background: 'url(/bkg_perfil.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <LogoSeoc/>
      <div className="grid grid-cols-3 gap-4 justify-center items-center">
        <div className="col-span-1 p-4">
          <div className='flex items-center justify-center'>
            <Image
              src={`/avatar_${perfil}.png`}
              alt='supervisor especializado en obras de concreto'
              width='200'
              height='200'
              style={{
                background: '#fff',
                width: '100%',
              }}
              className='shadow-lg shadow-gray-400'
            />
          </div>
          <p className="text-gray-100 bg-gray-900 p-3 text-1xl text-center font-medium my-5">{upperCaseText}</p>
        </div>
        <div className="col-span-2 p-4">
          <div className="grid grid-cols-4 gap-3">
              {rama === 'tema' && categorias.map((ele:any) => (
                <Link key={ele.id} href={`/perfil/puesto/${perfil}/tema/${ele.url}`}>
                  <p className="flex items-center justify-center text-gray-900 text-sm p-2 text-center shadow-lg shadow-gray-400 hover:bg-gray-900 hover:text-gray-100 text-center my-0 h-14 leading-4 border border-gray-500 rounded-full">{ele.nombre.toUpperCase()}</p>
                </Link>
              ))}
              {rama === 'comite' && comites.map((ele:any) => (
                <Link key={ele.id} href={`/perfil/puesto/${perfil}/tema/${ele.url}`}>
                  <p className="flex items-center justify-center text-gray-900 text-sm p-3 text-center shadow-lg shadow-gray-400 hover:bg-gray-900 hover:text-gray-100 text-center my-0 h-12 leading-4 border border-gray-500 rounded-full">{ele.nombre.toUpperCase()}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
