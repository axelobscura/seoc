"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LogoSeoc from '../components/LogoSeoc'
import { useUsuario } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'
import Image from 'next/image'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {usuario, isLoading, isError} = useUsuario(email, password);
  
  const router = useRouter();

  const ingreso = async (e: any) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    router.push('/tema');
  }
  /*
  useEffect(() => {
    console.log("el usuario: ", usuario);
    if(usuario){
      if(usuario.length > 0){
        
      }else{
        alert('Usuario no encontrado');
      }
    }
  }, [usuario])
  */
  if(isLoading){
    return(
      <Loader />
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(bkg_entrada_login.jpg) no-repeat center center fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center bg-white bg-opacity-40 py-10 px-10 shadow-lg'>
        <div>
          <Image
            src='/logo_seoc_entrada.png'
            width='400'
            height='400'
            alt="seoc"
          />
        </div>
        <div>
          <form onSubmit={ingreso} className='flex flex-col gap-1 mx-0 mt-0'>
            <div className="mb-0">
              <input className="font-smooch text-1xl block w-full px-10 py-3 border border-gray-300 bg-gray-900 rounded-full focus:outline-none focus:border-blue-500 text-white mb-3" type="email" id="email" name="email" placeholder='Correo electrónico' />
            </div>
            <div className="mb-0">
              <input className="font-smooch text-1xl block w-full px-10 py-3 border border-gray-300 bg-gray-900 rounded-full focus:outline-none focus:border-blue-500 text-white mb-3" type="password" id="password" name="password" placeholder='Contraseña' />
            </div>
            <button className="font-smooch block text-2xl bg-black hover:bg-white text-white hover:text-black rounded-full py-1 px-0 w-full m-0 font-bold" type="submit">INGRESAR</button>
          </form>
        </div>
      </div>
    </main>
  )
}
