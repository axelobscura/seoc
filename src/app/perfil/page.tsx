"use client"

export default function Perfil() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(bkg_perfil.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className="perfil">
        <h2 className="text-gray-900 text-5xl text-center font-extralight">APRENDE O REFUERZA<br/>TUS CONOCIMIENTOS</h2>
        <p className="text-gray-800 text-center my-10 py-3 px-5 shadow-2xl rounded-full">ELIGE COMO QUIERES ESTUDIAR</p>
      </div>
    </main>
  )
}
