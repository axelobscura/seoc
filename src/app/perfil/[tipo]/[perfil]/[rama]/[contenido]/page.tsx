"use client"
import { useParams } from 'next/navigation'
import { useContenidos } from '../../../../../../../lib/swr-hooks'
import LogoSeoc from '@/app/components/LogoSeoc'
import Image from 'next/image'
import Loader from '@/app/components/Loader'

export default function Rama() {
  const params = useParams()
  const {contenidos, isLoading} = useContenidos('311-07');
  let rama: any = params.rama;
  let perfil: any = params.perfil;
  let contenido: any = params.contenido;
  let upperCaseText: string = perfil.toUpperCase();
  let ramaUpperCase: string = rama.toUpperCase();
  let contenidoUpperCase: string = contenido.toUpperCase();
  
  if(isLoading){
    return(
        <Loader />
    )
  }
  console.log(contenidos);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12" style={{
      background: 'url(/bkg_perfil.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    }}>
      <LogoSeoc/>
      <div className="grid grid-cols-3 gap-4 justify-center items-top">
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
          <p className="text-gray-100 bg-gray-900 p-3 text-1xl text-center font-extralight my-3">{upperCaseText} | {contenidoUpperCase}</p>
        </div>
        <div className="col-span-2 p-4 bg-white">
          <h2 className="font-smooch text-gray-900 text-5xl text-left font-extralight">{contenidoUpperCase.split('-').join(' ')}</h2>
          <hr/>
          {contenidos.map((cat: any, i: any) => (
            <div key={cat.id}>
              <h4 className="font-smooch text-gray-900 text-4xl text-left font-extralight py-3">{cat.titulo}</h4>
              <p className="text-gray-900 text-2sm text-left font-extralight" dangerouslySetInnerHTML={{__html: cat.contenido}}></p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
