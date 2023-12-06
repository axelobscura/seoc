"use client"
import { useParams, useSearchParams } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import LogoSeoc from '@/app/components/LogoSeoc'

export default function Tipo() {
  const params = useParams()
  const searchParams = useSearchParams()
  let tipo = params.tipo;
  const search = searchParams.get('empresa')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(/bkg_perfil.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <LogoSeoc/>
      <div className="perfil">
        <h3 className="font-sans text-white bg-blue-900 text-center my-10 py-3 px-20 text-2xl font-extralight shadow-2xl rounded-full">ELIGE TU PERFIL</h3>
        <p className="font-sans text-gray-900 text-center my-10 py-3 px-20 text-2xl font-extralight shadow-2xl rounded-full">{search?.toUpperCase()}</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-4 mt-5">
        <div>
          <Link href={{ pathname: '/perfil/puesto/supervisor', query: { empresa: search }}}>
            <div>
              <Image
                src='/tarjeta_supervisor.png'
                width='500'
                height='500'
                alt=""
                className="shadow-2xl"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: '/perfil/puesto/concretero', query: { empresa: search }}}>
            <div>
              <Image
                src='/tarjeta_concretero.png'
                width='500'
                height='500'
                alt=""
                className="shadow-2xl"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: '/perfil/puesto/analista', query: { empresa: search }}}>
            <div>
              <Image
                src='/tarjeta_analista.png'
                width='500'
                height='500'
                alt=""
                className="shadow-2xl"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: '/perfil/puesto/laboratorista', query: { empresa: search }}}>
            <div>
              <Image
                src='/tarjeta_laboratorista.png'
                width='500'
                height='500'
                alt=""
                className="shadow-2xl"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: '/perfil/puesto/contratista', query: { empresa: search }}}>
            <div>
              <Image
                src='/tarjeta_contratista.png'
                width='500'
                height='500'
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
