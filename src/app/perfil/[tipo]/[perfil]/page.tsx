"use client"
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { usePerfil } from '../../../../../lib/swr-hooks'
import Image from 'next/image'
import LogoSeoc from '@/app/components/LogoSeoc'

export default function Puesto() {
  const params = useParams()
  let perfil: any = params.perfil
  const {contenidos, isLoading} = usePerfil(perfil)
  const searchParams = useSearchParams()
  let upperCaseText: string = perfil.toUpperCase()
  const search = searchParams.get('empresa')
  if(perfil === 'supervisor'){
    upperCaseText = upperCaseText + ' DE OBRAS DE CONCRETO'
  }
  if(perfil === 'analista'){
    upperCaseText = upperCaseText + ' DE CALIDAD'
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{
      background: 'url(/bkg_perfil.jpg) no-repeat left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <LogoSeoc/>
      <div className="perfil">
        <div className='flex items-center justify-center'>
          <Image
            src={`/avatar_${perfil}.png`}
            alt='supervisor especializado en obras de concreto'
            width='200'
            height='200'
            style={{
              borderRadius: "50%",
              width: '30%',
            }}
            className='shadow-lg shadow-gray-400 mb-5'
          />
        </div>
        <p className="text-gray-900 text-3xl text-center font-extralight my-5">{upperCaseText}</p>
        <p className="text-gray-100 bg-gray-900 p-3 text-1xl text-center font-medium my-5 rounded-full">{search?.toUpperCase()}</p>
        <p className="text-gray-900 text-xs text-center font-extralight my-5 px-5">
          {perfil === "supervisor" && `MI PRINCIPAL FUNCIÓN ES ASEGURARME DE QUE TERMINEN LOS TRABAJOS EN TIEMPO Y FORMA, CON BASE A LO ESTABLECIDO EN LOS DOCUMENTOS DE DISEÑO`}
          {perfil === "concretero" && `REALIZO TODAS LAS ACTIVIDADES NECESARIAS PARA ENTREGAR UN CONCRETO DE BUENA CALIDAD, DESDE LA SELECCIÓN DE LOS MATERIALES, ACOMPAÑAMIENTO CON EL CLIENTE, HASTA LA ENTREGA EN CAMPO`}
          {perfil === "analista" && `OBTENGO Y ANALIZO LOS RESULTADOS DE LA BASE DE DATOS DE CONCRETO FRESCO Y ENDURECIDO DE CADA PLANTA. SOY RESPONSABLE DIRECTO DEL LOGRO Y COMUNICACIÓN DE INDICADORES DE EFICIENCIA,Y SOBRECONSUMO PARA CADA UNA DE LAS PLANTAS.`}
          {perfil === "laboratorista" && `REALIZAO LAS PRUEBAS AL CONCRETO FRESCO, ENDURECIDO, DURABILIDAD, PETROGRAFÍA, AGREGADOS, CEMENTO, AGUA, ETC. ALGUNAS DE ELLAS EN CAMPO,OTRAS EN NUESTRO LABORATORIO, ASEGURANDOME DE QUE EL PROCEDIMIENTO SEA CON BASE A LAS NORMAS APLICABLES`}
          {perfil === "contratista" && `ALGUNAS DE MIS ACTIVIDADES SON RECIBIR EL CONCRETO EN OBRA, REALIZO LOS PROCEDIMIENTOS DE COLOCACIÓN, COMPACTACIÓN, CURADO, ACABADO, DE CIMBRADO, ETC.`}
        </p>
        <p className='text-gray-900 text-1xl text-center font-bold my-5'>SELECCIONE SU MODELO DE CONSULTA</p>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
          <Link href={`/perfil/puesto/${perfil}/tema`}>
            <p className="text-white bg-blue-900 text-center my-0 py-3 px-20 shadow-2xl rounded-full shadow-lg shadow-gray-400">POR TEMA</p>
          </Link>
          <Link href={`/perfil/puesto/${perfil}/comite`}>
            <p className="text-white bg-blue-900 text-center my-0 py-3 px-20 shadow-2xl rounded-full shadow-lg shadow-gray-400">POR COMITÉ</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
