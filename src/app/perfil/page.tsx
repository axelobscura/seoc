"use client"
import Image from "next/image"
import Link from "next/link"
import LogoSeoc from "../components/LogoSeoc"
import { useSearchParams } from 'next/navigation'

export default function Perfil() {
  const searchParams = useSearchParams()
  const search = searchParams.get('empresa')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(/bkg_perfil.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <LogoSeoc/>
      <div className="perfil">
        <h2 className="text-gray-900 text-3xl text-center font-extralight">APRENDE O REFUERZA<br/>TUS CONOCIMIENTOS</h2>
        <p className="text-gray-800 text-center my-10 py-3 px-5 shadow-2xl rounded-full"><b>{search?.toUpperCase()}</b><br/>ELIGE COMO QUIERES ESTUDIAR</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <div>
          <Link href={{ pathname: '/perfil/puesto', query: { empresa: search } }}>
            <div>
              <Image
                src='/tarjeta_perfil.png'
                width='300'
                height='300'
                alt=""
                className="shadow-2xl"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: '/categorias', query: { empresa: search } }}>
            <div>
              <Image
                src='/tarjeta_comite.png'
                width='300'
                height='300'
                alt=""
                className="shadow-2xl"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: '/buscador', query: { empresa: search } }}>
            <div>
              <Image
                src='/tarjeta_busqueda.png'
                width='300'
                height='300'
                alt=""
                className="shadow-2xl"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: '/preguntas', query: { empresa: search } }}>
            <div>
              <Image
                src='/tarjeta_pregunta.png'
                width='300'
                height='300'
                alt=""
                className="shadow-2xl"
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
