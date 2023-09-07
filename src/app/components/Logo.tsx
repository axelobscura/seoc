import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return(
        <Link href="/">
            <div>
                <Image
                    src="/logo_imcyc.webp"
                    alt="Supervisor Especializado en Obras de Concreto, Instituto Mexicano del Cemento y del Concreto A.C."
                    width={200}
                    height={95}
                    className='mb-5'
                />
            </div>
        </Link>
    )
}