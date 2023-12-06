import Logo from '../components/Logo'
import Search from '../components/Search'

export default function Buscador() {
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans uppercase mb-5'>CATEGORÍAS</h2>
            <Search/>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <h2>Tema</h2>
            </div>
        </main>
    )
}
