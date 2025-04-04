"use client"
import Link from 'next/link'
import MenuSuperior from '../components/MenuSuperior'

export default function Fuente() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full" style={{
            background: 'url(/bkg_entrada_cat_item.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <MenuSuperior/>
            <Link href={`/secciones`}>
                <h3 className='font-smooch text-3xl text-gray-950 bg-white py-3 px-10 md:px-36 mb-2 rounded-full shadow-lg mb-10'>FUENTE</h3>
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5 mx-10 my-5">
                <Link href={`/fuente/aci`}>
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full" style={{
                    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.7)',
                  }}>ACI</button>
                </Link>
                <Link href={`/fuente/astm`}>
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full" style={{
                    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.7)',
                  }}>ASTM</button>
                </Link>
                <Link href={`/fuente/nmx`}>
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full" style={{
                    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.7)',
                  }}>NMX</button>
                </Link>
                <Link href={`/fuente/cfe`}>
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full" style={{
                    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.7)',
                  }}>CFE</button>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 mx-10 justify-center items-center">
                <Link href={`/fuente/ntc`}>
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full" style={{
                    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.7)',
                  }}>NTC</button>
                </Link>
                <Link href={`/fuente/pca`}>
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full" style={{
                    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.7)',
                  }}>PCA</button>
                </Link>
            </div>
        </main>
    )
}
