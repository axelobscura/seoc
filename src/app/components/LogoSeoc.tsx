"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function LogoSeoc() {
    const searchParams = useSearchParams()
    const search = searchParams.get('empresa')
    return(
        <Link href={{ pathname: '/perfil', query: { empresa: search }}} style={{
          position: 'fixed',
          top: '10px',
          right: '10px'
        }}>
            <div>
                <Image
                    src="/logo_seoc_completo.svg"
                    alt="Supervisor Especializado en Obras de Concreto, Instituto Mexicano del Cemento y del Concreto A.C."
                    width={200}
                    height={95}
                    className='mb-1'
                />
            </div>
        </Link>
    )
}