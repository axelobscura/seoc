"use client"
import { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import { useMatrix } from '../../../lib/swr-hooks'

interface Data {
  empresa?: string,
  tema?: string,
  comite?: string,
  titulo?: string,
  subtitulo?: string,
  indice?: string,
  contenido?: string,
}

export default function Admin() {
    const [enviar, setEnviar] = useState(false);
    const [data, setData] = useState<Data | undefined>();

    const dataRegistro = async (e: any) => {
      e.preventDefault();
      let empresa = e.target.empresa.value;
      let tema = e.target.tema.value;
      let comite = e.target.comite.value;
      let titulo = e.target.titulo.value;
      let subtitulo = e.target.subtitulo.value;
      let indice = e.target.indice.value;
      let contenido = e.target.contenido.value;

      setData({empresa, tema, comite, titulo, subtitulo, indice, contenido});

      setEnviar(true);
    }

    const {matrix, isLoading} = useMatrix(data);
    
    useEffect(() => {
      
      console.log(matrix)
    }, [data])
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Logo/>
            <p className='font-sans text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='text-4xl text-bold text-uppercase text-gray-500 font-sans uppercase mb-5'>ADMINISTRADOR</h2>
            <div className="grid grid-cols-1 mt-5 w-full">
            {!enviar &&
                <form onSubmit={dataRegistro}>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Empresa:</label>
                  <select id="empresa" name="empresa" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    <option value="" disabled selected>Seleccione la empresa</option>
                    <option value="ACI">ACI</option>
                    <option value="CFE">CFE</option>
                    <option value="PCA">PCA</option>
                    <option value="ASTM">ASTM</option>
                    <option value="NMX">NMX</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Tema:</label>
                  <select id="tema" name="tema" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="" disabled selected>Seleccione el tema</option>
                    <option value="Supervisión">Supervisión</option>
                    <option value="Control de calidad">Control de calidad</option>
                    <option value="Pruebas">Pruebas</option>
                    <option value="Prácticas estándar o recomendaciones">Prácticas estándar o recomendaciones</option>
                    <option value="Materiales">Materiales</option>
                    <option value="Mezclas de concreto">Mezclas de concreto</option>
                    <option value="Mezclado de concreto">Mezclado de concreto</option>
                    <option value="Aditivos">Aditivos</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Bombeo">Bombeo</option>
                    <option value="Cimbras">Cimbras</option>
                    <option value="Colocación">Colocación</option>
                    <option value="Compactación">Compactación</option>
                    <option value="Curado">Curado</option>
                    <option value="Acabados">Acabados</option>
                    <option value="Pavimentos">Pavimentos</option>
                    <option value="Losas">Losas</option>
                    <option value="Mampostería">Mampostería</option>
                    <option value="Acero de refuerzo">Acero de refuerzo</option>
                    <option value="Concreto en clima frío">Concreto en clima frío</option>
                    <option value="Concreto en clima cálido">Concreto en clima cálido</option>
                    <option value="Concreto precolado">Concreto precolado</option>
                    <option value="Concreto presforzado">Concreto presforzado</option>
                    <option value="Concreto arquitectónico">Concreto arquitectónico</option>
                    <option value="Concreto estructural">Concreto estructural</option>
                    <option value="Concreto ligero">Concreto ligero</option>
                    <option value="Concreto masivo">Concreto masivo</option>
                    <option value="Concretos especiales">Concretos especiales</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Comité:</label>
                  <select id="comite" name="comite" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="" disabled selected>Seleccione la comité</option>
                    <option value="311-07">311-07</option>
                    <option value="117-01">117-01</option>
                    <option value="301-05">301-05</option>
                    <option value="302 IR-04">302 IR-04</option>
                    <option value="304-00">304-00</option>
                    <option value="304-96">304-96</option>
                    <option value="305R-99">305R-99</option>
                    <option value="306-88">306-88</option>
                    <option value="308-92">308-92</option>
                    <option value="309R-05">309R-05</option>
                    <option value="318S-08">318S-08</option>
                    <option value="347-04">347-04</option>
                    <option value="CRSI">CRSI</option>
                    <option value="C29 M97">C29 M97</option>
                    <option value="C94 M04">C94 M04</option>
                    <option value="213">213</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
                  <input type="text" name="titulo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Sub Título:</label>
                  <input type="text" name="subtitulo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Índice:</label>
                  <input type="text" name="indice" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Contenido:</label>
                  <textarea id="message" name="contenido" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
              </form>
            }



            
            </div>
        </main>
    )
}
