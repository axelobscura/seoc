"use client"
import { useParams, useSearchParams } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import LogoSeoc from '@/app/components/LogoSeoc'

export default function Tipo() {
  const params = useParams()
  let tipo = params.tipo;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(/bkg_perfil.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <LogoSeoc/>
      <div className="perfil">
        <p className="text-white bg-blue-900 text-center my-10 py-3 px-20 shadow-2xl rounded-full">ELIGE TU PERFIL</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-4 mt-5">
        <div>
          <Link href='/perfil/puesto/supervisor'>
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
          <Link href='/perfil/puesto/concretero'>
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
          <Link href='/perfil/puesto/analista'>
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
          <Link href='/perfil/puesto/laboratorista'>
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
          <Link href='/perfil/puesto/contratista'>
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
