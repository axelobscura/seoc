"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useCategorias } from '../../../../../../lib/swr-hooks'
import Image from 'next/image'
//import { usePerfil } from '../../../../../lib/swr-hooks'
import LogoSeoc from '@/app/components/LogoSeoc'
import Loader from '@/app/components/Loader'

export default function Rama() {
  const {categorias, isLoading} = useCategorias();
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
  if(isLoading){
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
                borderRadius: "50%",
                width: '80%',
                border: '1px solid #000'
              }}
            />
          </div>
          <p className="text-gray-900 text-md text-center font-extralight my-5">{upperCaseText}</p>
        </div>
        <div className="col-span-2 p-4">
          <p className="text-gray-900 text-3xl text-center font-light my-5 py-3 border-b border-gray-300">{ramaUpperCase} DE CONSULTA</p>
          <div className="grid grid-cols-3 gap-3">
              {categorias.map((ele:any) => (
                <Link key={ele.id} href="">
                  <p className="flex items-center justify-center text-gray-100 text-sm p-3 text-center bg-gray-900 hover:bg-gray-500 text-center my-0 h-12 leading-4">{ele.nombre.toUpperCase()}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
