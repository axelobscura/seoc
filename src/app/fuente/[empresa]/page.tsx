"use client"
import Link from 'next/link'
import Search from '../../components/Search'
//import { useCategorias } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuSuperior from '../../components/MenuSuperior'

export default function Fuente() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full" style={{
            background: 'url(/bkg_entrada_cat_det.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <MenuSuperior/>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5 mx-10 my-5">
                hola
            </div>
        </main>
    )
}
