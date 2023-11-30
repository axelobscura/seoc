import Link from 'next/link'
import Logo from '../components/Logo'
import LogoSeoc from "../components/LogoSeoc"
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

export default function Empresa() {
    
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
        background: 'url(/bkg_perfil.jpg) no-repeat left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
            <LogoSeoc/>
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto....</small></p>
            <div className="grid grid-cols-5 gap-4 mt-5">
              <div>
                <Link href={{ pathname: '/perfil', query: { empresa: 'aci' } }}>
                  <div className="max-w-sm rounded-full overflow-hidden shadow-lg bg-gray-900 hover:bg-gray500">
                    <div className="px-6 py-4">
                      <div className="flex justify items-center">
                        <ChevronRightIcon className="h-8 w-8 text-gray-300 hover:text-slate-400" />
                        <span className="text-xl font-bold">ACI</span>
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
                        <span className="text-xl font-bold">CFE</span>
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
                        <span className="text-xl font-bold">PCA</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link href={{ pathname: '/perfil', query: { empresa: 'astm' } }}>
                  <div className="max-w-sm rounded-full overflow-hidden shadow-lg bg-gray-900 hover:bg-gray-500">
                    <div className="px-6 py-4">
                      <div className="flex items-center">
                        <ChevronRightIcon className="h-8 w-8 text-gray-300 hover:text-slate-400" />
                        <span className="text-xl font-bold">ASTM</span>
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
                        <span className="text-xl font-bold">NMX</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
        </main>
    )
}
