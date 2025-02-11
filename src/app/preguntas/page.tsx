import Logo from '../components/Logo'
import Search from '../components/Search'
import MenuSuperior from '../components/MenuSuperior'
import Link from 'next/link'

export default function Preguntas() {
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full" style={{
            background: 'url(/bkg_entrada_cat_item.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <MenuSuperior/>
            <Link href={`/secciones`}>
                <h3 className='font-smooch text-3xl text-gray-950 bg-white py-3 px-10 md:px-36 mb-2 rounded-full shadow-lg'>PREGUNTA</h3>
            </Link>
            <Search/>
        </main>
    )
}
