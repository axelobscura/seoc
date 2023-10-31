"use client"
import { useParams } from 'next/navigation'

export default function Puesto() {
  const params = useParams()
  let perfil: any = params.perfil;
  const upperCaseText: string = perfil.toUpperCase();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(bkg_perfil.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className="perfil">
        <p className="text-white bg-blue-900 text-center my-10 py-3 px-20 shadow-2xl rounded-full">{upperCaseText}</p>
      </div>
    </main>
  )
}
