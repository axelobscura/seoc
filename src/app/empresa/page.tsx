import Link from 'next/link'
import Logo from '../components/Logo'
import LogoSeoc from "../components/LogoSeoc"
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Empresa() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
        background: 'url(/bkg_perfil.jpg) no-repeat left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
            <Image
                src='/logo_seoc_entrada.png'
                width='200'
                height='200'
                alt="seoc"
            />
            <p className='font-smooch text-4xl text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <p className='font-smooch text-gray-900 text-2xl text-center font-bold my-5'>SELECCIONE LA EMPRESA</p>
            <div className="grid grid-cols-5 gap-4 mt-5">
              <div>
                <Link href={{ pathname: '/perfil', query: { empresa: 'astm' } }}>
                  <div className="max-w-sm rounded-full overflow-hidden shadow-lg bg-gray-900 hover:bg-gray-500">
                    <div className="px-6 py-4">
                      <div className="flex items-center">
                        <ChevronRightIcon className="h-8 w-8 text-gray-300 hover:text-slate-400" />
                        <span className="font-smooch text-4xl ffont-bold text-white">ASTM</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link href={{ pathname: '/perfil', query: { empresa: 'cfe' } }}>
                  <div className="max-w-sm rounded-full overflow-hidden shadow-lg bg-gray-900 hover:bg-gray-500">
                    <div className="px-6 py-4">
                      <div className="flex items-center">
                        <ChevronRightIcon className="h-8 w-8 text-gray-300 hover:text-slate-400" />
                        <span className="font-smooch text-4xl font-bold text-white">CFE</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link href={{ pathname: '/perfil', query: { empresa: 'aci' } }}>
                  <div className="max-w-sm rounded-full overflow-hidden shadow-lg bg-gray-900 hover:bg-gray500">
                    <div className="px-6 py-4">
                      <div className="flex justify items-center">
                        <ChevronRightIcon className="h-8 w-8 text-gray-300 hover:text-slate-400" />
                        <span className="font-smooch text-4xl ffont-bold text-white">ACI</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link href={{ pathname: '/perfil', query: { empresa: 'pca' } }}>
                  <div className="max-w-sm rounded-full overflow-hidden shadow-lg bg-gray-900 hover:bg-gray-500">
                    <div className="px-6 py-4">
                      <div className="flex items-center">
                        <ChevronRightIcon className="h-8 w-8 text-gray-300 hover:text-slate-400" />
                        <span className="font-smooch text-4xl ffont-bold text-white">PCA</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link href={{ pathname: '/perfil', query: { empresa: 'nmx' } }}>
                  <div className="max-w-sm rounded-full overflow-hidden shadow-lg bg-gray-900 hover:bg-gray-500">
                    <div className="px-6 py-4">
                      <div className="flex items-center">
                        <ChevronRightIcon className="h-8 w-8 text-gray-300 hover:text-slate-400" />
                        <span className="font-smooch text-4xl ffont-bold text-white">NMX</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
        </main>
    )
}
