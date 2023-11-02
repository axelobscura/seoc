import Image from 'next/image'
import Link from 'next/link'

export default function LogoSeoc() {
    return(
        <Link href="/perfil" style={{
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