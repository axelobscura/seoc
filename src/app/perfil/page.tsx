"use client"
import Image from "next/image"
import Link from "next/link"
import LogoSeoc from "../components/LogoSeoc"
import { useSearchParams } from 'next/navigation'
import MenuSuperior from "../components/MenuSuperior"

export default function Perfil() {
  const searchParams = useSearchParams()
  const search = searchParams.get('empresa')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(/bkg_entrada_cat_item.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <MenuSuperior/>
      <Link href={`/secciones`}>
          <h3 className='font-smooch text-3xl text-gray-950 bg-white py-3 px-10 md:px-36 rounded-full shadow-lg mb-16'>PERFIL</h3>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-5">
        <div className='flex flex-col items-center justify-between bg-white bg-opacity-70 p-5 shadow-lg'>
          <h4 className='font-smooch text-2xl text-gray-950 py-1 mb-2 border-b-2 border-gray-900 p-4 text-center w-full line-clamp-1'>SUPERVISOR DE OBRAS DE CONCRETO</h4>
          <p className="font-smooch text-1xl px-25 py-10">MI PRINCIPAL FUNCIÓN ES ASEGURARME DE QUE TERMINEN LOS TRABAJOS EN TIEMPO Y FORMA, CON BASE A LO ESTABLECIDO EN LOS DOCUMENTOS DE DISEÑO.</p>
          <Link href={`/fuente`} className="font-smooch text-2xl rounded-full bg-black px-5 py-1 mt-1 w-full uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACEPTAR</Link>
        </div>
        <div className='flex flex-col items-center justify-between bg-white bg-opacity-70 p-5 shadow-lg'>
          <h4 className='font-smooch text-2xl text-gray-950 py-1 mb-2 border-b-2 border-gray-900 p-4 text-center w-full'>CONCRETERO</h4>
          <p className="font-smooch text-1xl px-25 py-10">REALIZO TODAS LAS ACTIVIDADES NECESARIAS PARA ENTREGAR UN CONCRETO DE BUENA CALIDAD, DESDE LA SELECCIÓN DE LOS MATERIALES, ACOMPAÑAMIENTO CON EL CLIENTE, HASTA LA ENTREGA EN CAMPO</p>
          <Link href={`/fuente`} className="font-smooch text-2xl rounded-full bg-black px-5 py-1 mt-1 w-full uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACEPTAR</Link>
        </div>
        <div className='flex flex-col items-center justify-between bg-white bg-opacity-70 p-5 shadow-lg'>
          <h4 className='font-smooch text-2xl text-gray-950 py-1 mb-2 border-b-2 border-gray-900 p-4 text-center w-full'>LABORATORISTA</h4>
          <p className="font-smooch text-1xl px-25 py-10">REALIZO LAS PRUEBAS AL CONCRETO FRESCO, ENDURECIDO, DURABILIDAD, PETROGRAFÍA, AGREGADOS, CEMENTO, AGUA, ETC. ALGUNAS DE ELLAS EN CAMPO, OTRAS EN NUESTRO LABORATORIO, ASEGURANDOME DE QUE EL PROCEDIMIENTO SEA CON BASE A LAS NORMAS APLICABLES.</p>
          <Link href={`/fuente`} className="font-smooch text-2xl rounded-full bg-black px-5 py-1 mt-1 w-full uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACEPTAR</Link>
        </div>
        <div className='flex flex-col items-center justify-between bg-white bg-opacity-70 p-5 shadow-lg'>
          <h4 className='font-smooch text-2xl text-gray-950 py-1 mb-2 border-b-2 border-gray-900 p-4 text-center w-full'>ANALISTA DE CALIDAD</h4>
          <p className="font-smooch text-1xl px-25 py-10">OBTENGO Y ANALIZO LOS RESULTADOS DE LA BASE DE DATOS DE CONCRETO FRESCO Y ENDURECIDO DE CADA PLANTA. SOY RESPONSABLE DIRECTO DEL LOGRO Y COMUNICACIÓN DE INDICADORES DE EFICIENCIA, Y SOBRECONSUMO PARA CADA UNA DE LAS PLANTAS.</p>
          <Link href={`/fuente`} className="font-smooch text-2xl rounded-full bg-black px-5 py-1 mt-1 w-full uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACEPTAR</Link>
        </div>
        <div className='flex flex-col items-center justify-between bg-white bg-opacity-70 p-5 shadow-lg'>
          <h4 className='font-smooch text-2xl text-gray-950 py-1 mb-2 border-b-2 border-gray-900 p-4 text-center w-full'>CONTRATISTA</h4>
          <p className="font-smooch text-1xl px-25 py-10">ALGUNAS DE MIS ACTIVIDADES SON RECIBIR EL CONCRETO EN OBRA,REALIZO LOS PROCEDIMIENTOS DE COLOCACIÓN, COMPACTACIÓN, CURADO, ACABADO, DECIMBRADO, ETC.</p>
          <Link href={`/fuente`} className="font-smooch text-2xl rounded-full bg-black px-5 py-1 mt-1 w-full uppercase text-white hover:bg-gray-800 border border-gray-800 text-center">ACEPTAR</Link>
        </div>
      </div>
    </main>
  )
}
