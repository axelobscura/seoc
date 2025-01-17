"use client"
import { useRouter } from 'next/navigation'
import LogoSeoc from '../components/LogoSeoc';

export default function Login() {
  const router = useRouter();
  const ingreso = (e: any) => {
    e.preventDefault();
    console.log('registro');
    router.push('/tipo-de-busqueda');
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
        <form onSubmit={ingreso} className='flex flex-col gap-5 mx-0 mt-0 fixed bottom-10 left-1/4 w-1/2'>
          <div className="mb-0">
            <input className="block w-full px-4 py-3 border border-gray-300 bg-gray-900 rounded-full focus:outline-none focus:border-blue-500 text-gray-900" type="email" id="email" name="email" placeholder='Correo electrónico' />
          </div>
          <div className="mb-0">
            <input className="block w-full px-4 py-3 border border-gray-300 bg-gray-900 rounded-full focus:outline-none focus:border-blue-500 text-gray-900" type="password" id="password" name="password" placeholder='Contraseña' />
          </div>
          <button className="font-smooch block text-4xl bg-black hover:bg-white text-white hover:text-black rounded-full py-3 px-0 w-full m-0 font-bold" type="submit">INGRESAR</button>
        </form>
      </div>
    </main>
  )
}
