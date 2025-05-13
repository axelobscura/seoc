"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import MenuSuperior from "../../../components/MenuSuperior";
import { useParams, useSearchParams } from "next/navigation";
import Loader from "@/app/components/Loader";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { FaCirclePlus } from "react-icons/fa6";
import { FaArrowAltCircleDown } from "react-icons/fa";


export default function Detalle() {
  const params = useParams();
  const [categoria, setCategoria] = useState<{ nombre: string }[]>([]);
  const [comite, setComite] = useState<{ descripcion: string }[]>([]);
  const [comiteCatego, setComiteCatego] = useState<{ 
    id_categoria: string,
    nombre: string,
    descripcion: string,
  }[]>([]);
  const [contenido, setContenido] = useState<{ 
    id: number,
    categoria: string,
    subcategoria: string,
    titulo: string,
    contenido: string,
    descripcion: string }[]>([]);
  const searchParams = useSearchParams();
  const idcategoria = searchParams.get("idcategoria");
  const norma = searchParams.get("norma");
  const id = searchParams.get("id");
  const empresa = searchParams.get("empresa");

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`/api/get-categoria?idcategoria=${idcategoria}`);
      const data = await res.json()
      setCategoria(data)
    }
    fetchPosts()
  }, []);

  useEffect(() => {
    async function fetchPostsComite() {
      const res = await fetch(`/api/get-comite?norma=${norma}&id=${idcategoria}`);
      const data = await res.json()
      setComite(data)
    }
    fetchPostsComite()
  }, [categoria]);

  useEffect(() => {
    async function fetchPostsComite() {
      let res;
      if(empresa === 'ASTM') {
        res = await fetch(`/api/get-contenido-astm?norma=${norma}&id=${idcategoria}`);
      } else if(empresa === 'CFE'){
        res = await fetch(`/api/get-contenido-cfe?norma=${norma}&id=${idcategoria}`);
      } else if(empresa === 'NTC'){
        res = await fetch(`/api/get-contenido-ntc?norma=${norma}&id=${idcategoria}`);
      } else if(empresa === 'PCA'){
        res = await fetch(`/api/get-contenido-pca?norma=${norma}&id=${idcategoria}`);
      } else {
        res = await fetch(`/api/get-contenido?norma=${norma}&id=${idcategoria}`);
      }
      const data = await res.json()
      setContenido(data)
    }
    fetchPostsComite()
  }, [comite]);

  useEffect(() => {
    async function fetchPostsComiteCatego() {
      let res;
      if(empresa === 'ASTM') {
        res = await fetch(`/api/get-comitecatego-astm?id=${idcategoria}`);
      } else if(empresa === 'CFE'){
        res = await fetch(`/api/get-comitecatego-cfe?id=${idcategoria}`);
      } else if(empresa === 'NTC'){
        res = await fetch(`/api/get-comitecatego-ntc?id=${idcategoria}`);
      } else if(empresa === 'PCA'){
        res = await fetch(`/api/get-comitecatego-pca?id=${idcategoria}`);
      } else {
        res = await fetch(`/api/get-comitecatego?id=${idcategoria}`);
      }
      const data = await res.json()
      setComiteCatego(data)
    }
    fetchPostsComiteCatego()
  }, [comite]);

  if (!categoria) return <Loader/>
  if (!contenido.length) return <Loader/>

  console.log("contenido", contenido);
  console.log("comite", comite);

  return (
    <main
      className="flex min-h-screen flex-col w-full"
      style={{
        background:
          "url(/bkg_entrada_cat_det.jpg) no-repeat center center fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <MenuSuperior />
      <div className="grid grid-cols-[4fr_1fr] gap-4 min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-4 mt-0 w-full px-20">
            <div className="flex flex-col sm:flex-row items-start justify-start gap-3 pt-20">
              <button className="flex items-center font-smooch text-2xl rounded-full bg-white py-2 px-5 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 my-2 font-bold">
                <FaRegArrowAltCircleRight className="mr-2" /> {empresa} | {categoria[0]?.nombre}
              </button>
              <button className="flex items-center font-smooch text-2xl rounded-full bg-gray-900 py-2 px-5 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 my-2 font-bold">
                <AiFillPlusSquare className="mr-2" /> {norma}
              </button>
              <button className="flex items-center font-smooch text-2xl rounded-full bg-blue-900 py-2 px-5 mt-1 uppercase text-gray-100 hover:text-gray-200 hover:bg-gray-800 my-2 font-bold">
                <AiFillPlusSquare className="mr-2" /> {contenido[0]?.categoria}
              </button>
            </div>
            <div className="bg-white bg-opacity-70 p-5 text-gray-900 py-9 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 gap-4">
                {contenido.map((item, index) => (
                  <>
                    <button key={item.id} className="flex items-center font-smooch text-2xl rounded-full bg-black sm:px-0 md:px-0 py-1 font-extralight w-full uppercase text-white mb-0 p-20 px-20 mt-2">
                      <h3 className="flex items-center text-3xl font-bold px-10"><FaArrowAltCircleDown className="mr-3" /> {item.titulo}</h3>
                    </button>
                    <div className="px-20">{item.contenido}</div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-900 bg-opacity-70 min-h-screen justify-start items-start pt-44">
          <div className="px-5">
            <button className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full">
              COMITÉ
            </button>
            <div className="my-5">
              {comiteCatego.map((item, index) => (
                <Link
                  key={index}
                  className="flex items-center font-smooch text-2xl rounded-full bg-white py-2 px-5 mt-1 uppercase text-gray-900 hover:text-gray-200 hover:bg-gray-800 my-2 font-bold"
                  href={{
                    pathname: `/fuente/aci/${item.nombre}`,
                    query: {
                      idcategoria: item.id_categoria,
                      norma: item.nombre,
                      id: id,
                      empresa: empresa,
                    },
                  }}
                >
                  <FaRegArrowAltCircleRight className="mr-2" /> {item.nombre}
                </Link>
              ))}
            </div>
            <Link
              href={`/fuente/aci/311/comparativa`}
              className="font-smooch text-2xl rounded-full bg-black px-20 py-2 mt-1 uppercase text-white hover:bg-gray-800 border border-gray-800 w-full"
            >
              COMPARATIVA
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
