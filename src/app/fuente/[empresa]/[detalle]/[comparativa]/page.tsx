"use client"
import Link from 'next/link'
import Search from '../../../../components/Search'
//import { useCategorias } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuSuperior from '../../../../components/MenuSuperior'

export default function Comparativa() {

    const certs = [
      "ACI",
      "ASTM",
      "NMX",
      "CFE",
      "NTC",
      "PCA"
    ]

    return (
      <main className="flex min-h-screen flex-col w-full pb-10" style={{
        background: 'url(/bkg_entrada_cat_det.jpg) no-repeat center center fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
            <MenuSuperior/>
            <div className="grid grid-cols-[4fr_1fr] gap-4 min-h-screen">
              <div className='flex flex-col items-center justify-center'>
                <h2 className='font-smooch text-left text-8xl uppercase flex justify-start py-5 w-full px-20'>Curado</h2>
                <div className="grid grid-cols-1 gap-4 mt-0 w-full px-20">
                  <div className='flex flex-row items-center justify-center gap-3'>
                    <button className="font-smooch text-2xl rounded-full bg-gray-900 py-2 px-20 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 my-2">ACI</button>
                  </div>
                  <div>
                    <p className='font-smooch px-5 text-2xl'>La mayoría de los documentos del contrato requieren mantener las superficies expuestas de concreto que contenga cemento Portland estándar Tipo I, continuamente húmedas por al menos 7 días. Los concretos que contienen cementos de alta resistencia temprana (Tipo Ill) requieren menos tiempo de curado húmedo, y los cementos de lento endurecimiento (Tipos II, IV, V e IP y materiales cementantes Portland puzolánicos) requieren tiempos de corados para mayores resultados.</p>
                  </div>
                  <div className='flex flex-row items-center justify-center gap-3'>
                    <button className="font-smooch text-2xl rounded-full bg-gray-900 py-2 px-20 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 my-2">ASTM</button>
                  </div>
                  <div>
                    <p className='font-smooch px-5 text-2xl'>La mayoría de los documentos del contrato requieren mantener las superficies expuestas de concreto que contenga cemento Portland estándar Tipo I, continuamente húmedas por al menos 7 días. Los concretos que contienen cementos de alta resistencia temprana (Tipo Ill) requieren menos tiempo de curado húmedo, y los cementos de lento endurecimiento (Tipos II, IV, V e IP y materiales cementantes Portland puzolánicos) requieren tiempos de corados para mayores resultados.</p>
                  </div>
                  <div className='flex flex-row items-center justify-center gap-3'>
                    <button className="font-smooch text-2xl rounded-full bg-gray-900 py-2 px-20 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 my-2">NMX</button>
                  </div>
                  <div>
                    <p className='font-smooch px-5 text-2xl'>La mayoría de los documentos del contrato requieren mantener las superficies expuestas de concreto que contenga cemento Portland estándar Tipo I, continuamente húmedas por al menos 7 días. Los concretos que contienen cementos de alta resistencia temprana (Tipo Ill) requieren menos tiempo de curado húmedo, y los cementos de lento endurecimiento (Tipos II, IV, V e IP y materiales cementantes Portland puzolánicos) requieren tiempos de corados para mayores resultados.</p>
                  </div>
                  <div className='flex flex-row items-center justify-center gap-3'>
                    <button className="font-smooch text-2xl rounded-full bg-gray-900 py-2 px-20 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 my-2">CFE</button>
                  </div>
                  <div>
                    <p className='font-smooch px-5 text-2xl'>La mayoría de los documentos del contrato requieren mantener las superficies expuestas de concreto que contenga cemento Portland estándar Tipo I, continuamente húmedas por al menos 7 días. Los concretos que contienen cementos de alta resistencia temprana (Tipo Ill) requieren menos tiempo de curado húmedo, y los cementos de lento endurecimiento (Tipos II, IV, V e IP y materiales cementantes Portland puzolánicos) requieren tiempos de corados para mayores resultados.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-gray-900 bg-opacity-70 min-h-screen justify-center items-center">
                <div className="px-5">
                  <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full">COMITÉ</button>
                  <div className='my-5'>
                    {certs.map((cert, index) => (
                      <button key={index} className="font-smooch text-2xl rounded-full bg-white py-2 px-10 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 w-full my-2">{cert}</button>
                    ))}
                  </div>
                  <Link href={`/fuente/aci/311/comparativa`} className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full">COMPARATIVA</Link>
                </div>
                
              </div>
            </div>
            
        </main>
    )
}
