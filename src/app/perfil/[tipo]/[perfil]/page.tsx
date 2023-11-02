"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { usePerfil } from '../../../../../lib/swr-hooks'
import Image from 'next/image'
import LogoSeoc from '@/app/components/LogoSeoc'

export default function Puesto() {
  const params = useParams()
  let perfil: any = params.perfil;
  const {contenidos, isLoading} = usePerfil(perfil);
  console.log('contenidos: ', contenidos);
  let upperCaseText: string = perfil.toUpperCase();
  if(perfil === 'supervisor'){
    upperCaseText = upperCaseText + ' DE OBRAS DE CONCRETO'
  }
  if(perfil === 'analista'){
    upperCaseText = upperCaseText + ' DE CALIDAD'
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(/bkg_perfil.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <LogoSeoc/>
      <div className="perfil">
        <div className='flex items-center justify-center'>
          <Image
            src={`/avatar_${perfil}.png`}
            alt='supervisor especializado en obras de concreto'
            width='200'
            height='200'
            style={{
              background: '#fff',
              borderRadius: "50%",
              width: '50%',
              border: '1px solid #000'
            }}
          />
        </div>
        <p className="text-gray-900 text-3xl text-center font-extralight my-5">{upperCaseText}</p>
        <p className='text-gray-900 text-1xl text-center font-extralight my-5'>SELECCIONE SU MODELO DE CONSULTA</p>
        <div className='grid grid-cols-2 gap-4'>
          <Link href={`/perfil/puesto/${perfil}/tema`}>
            <p className="text-white bg-gray-900 text-center my-0 py-3 px-20 shadow-2xl">POR TEMA</p>
          </Link>
          <Link href={`/perfil/puesto/${perfil}/comite`}>
            <p className="text-white bg-gray-900 text-center my-0 py-3 px-20 shadow-2xl">POR COMITÉ</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
