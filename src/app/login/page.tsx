"use client"
import { useRouter } from 'next/navigation'
import LogoSeoc from '../components/LogoSeoc';

export default function Login() {
  const router = useRouter();
  const ingreso = (e: any) => {
    e.preventDefault();
    console.log('registro');
    router.push('/empresa');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(bkg_login.jpg) no-repeat center center fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    }}>
      <LogoSeoc/>
      <div className='flex flex-col login' style={{
        'marginLeft': '55%'
      }}>
        <form onSubmit={ingreso} className='mx-5 mt-3 fixed bottom-10 left-1/3 w-1/4'>
          <div className="mb-1">
            <label className="block font-medium text-gray-900">Correo electrónico:</label>
            <input className="block w-full px-4 py-1 border border-gray-300 bg-gray-900 text-white rounded-full focus:outline-none focus:border-blue-500 text-gray-900" type="email" id="email" name="email" />
          </div>
          <div className="mb-2">
            <label className="block font-medium text-gray-900">Contraseña:</label>
            <input className="block w-full px-4 py-1 border border-gray-300 bg-gray-900 text-white rounded-full focus:outline-none focus:border-blue-500 text-gray-900" type="password" id="password" name="password" />
          </div>
          <button className="bg-black text-white rounded-full py-2 px-4 w-full mt-2" type="submit">INGRESAR</button>
        </form>
      </div>
    </main>
  )
}
