"use client"
import Link from 'next/link'
import MenuSuperior from '../../components/MenuSuperior'

export default function Fuente() {
    return (
        <main className="flex min-h-screen flex-col w-full" style={{
            background: 'url(/bkg_entrada_cat_det.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <MenuSuperior/>
            <div className="grid grid-cols-[4fr_1fr] gap-4 min-h-screen">
              <div className='flex flex-col items-center justify-center'>
                <h2 className='font-smooch text-left text-8xl uppercase flex justify-start py-10 w-full px-20'>Curado</h2>
                <Link href={`/`} className="font-smooch text-4xl rounded-full bg-black px-24 py-3 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACI 311-07</Link>
                <p className='font-smooch mt-5 py-3 text-4xl'>Manual para supervisar obras de concreto</p>
                <div className="grid grid-cols-2 gap-4 mt-5 w-full px-20 bg-white bg-opacity-50 py-5">
                  <div>
                    <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Remoción de cimbras, reapuntalamiento, curado y
                    protección</button>
                    <ul className="list-disc pl-10 font-smooch">
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Curado</Link>
                      </li>
                    </ul>
                    <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Losas para edificios</button>
                    <ul className="list-disc pl-10 font-smooch">
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Losas sobre terrenos</Link>
                      </li>
                    </ul>
                    <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Losas de pavimento y tableros de puentes</button>
                    <ul className="list-disc pl-10 font-smooch">
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Curado y protección</Link>
                      </li>
                    </ul>
                    <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Concreto arquitectónico</button>
                    <ul className="list-disc pl-10 font-smooch">
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Curado y protección</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Métodos especiales de colocación del concreto</button>
                    <ul className="list-disc pl-10 font-smooch">
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Curado y protección</Link>
                      </li>
                    </ul>
                    <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Tipos especiales de concreto</button>
                    <ul className="list-disc pl-10 font-smooch">
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Concreto estructural con agregado de peso ligero</Link>
                      </li>
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Concreto de baja masa volumétrica</Link>
                      </li>
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Concreto pesado</Link>
                      </li>
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Concreto de contracción compensada</Link>
                      </li>
                    </ul>
                    <button className="font-smooch text-2xl rounded-full bg-blue-900 py-2 px-50 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 w-full my-2">Pruebas al concreto</button>
                    <ul className="list-disc pl-10 font-smooch">
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Curado de especímenes a flexión</Link>
                      </li>
                      <li className="text-gray-900 text-2xl">
                        <Link href={`/fuente/aci/311`}>Curado acelerado de especímenes de prueba</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-gray-900 bg-opacity-70 min-h-screen justify-center items-center">
                <div className="px-5">
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full">COMITÉ</button>
                  <div className='my-5'>
                    <button className="font-smooch text-2xl rounded-full bg-white py-2 px-10 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 w-full my-2">ACI 311-07</button>
                    <button className="font-smooch text-2xl rounded-full bg-white py-2 px-10 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 w-full my-2">ACI 302-04</button>
                  </div>
                </div>
                
              </div>
            </div>
        </main>
    )
}
