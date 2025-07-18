"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoSeoc from "../components/LogoSeoc";
import { useUsuario } from "../../../lib/swr-hooks";
import Loader from "@/app/components/Loader";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { usuario, isLoading, isError } = useUsuario(email, password);
  const [isLogged, setIsLogged] = useState(false);

  const router = useRouter();

  const ingreso = async (e: any) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
  };

  useEffect(() => {
    const testEmail = "ruribe@imcyc.com";
    const pwd = "12345";
    if (email === testEmail && password === pwd) {
      router.push("/tema?empresa=ACI");
    }
    if (isError) {
      alert("Error: " + isError);
      setIsLogged(false);
    }
  }, [email, password]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{
        background: "url(bkg_entrada_login.jpg) no-repeat center center fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center py-10 px-10 shadow-lg">
        <div>
          <h3 className="text-6xl font-light border-b-2 border-gray-900 pb-5">
            BIENVENIDO<span className="text-3xl p-0 m-0">A LA RED</span>
            <br />
            DE EXPERTOS EN
          </h3>
          <p className="pt-5 text-6xl text-center font-extrabold">
            CONSTRUCCIÓN
            <br />
            CON
            <br />
            CONCRETO
          </p>
        </div>
        <div className="bg-white bg-opacity-40 p-20">
          <div>
            <Image
              src="/logo_seoc_entrada.png"
              width="400"
              height="400"
              alt="seoc"
            />
          </div>
          <div>
            <form onSubmit={ingreso} className="flex flex-col gap-1 mx-0 mt-0">
              <div className="mb-0">
                <input
                  className="font-smooch text-1xl block w-full px-10 py-3 border border-gray-300 bg-gray-900 rounded-full focus:outline-none focus:border-blue-500 text-white mb-3"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="mb-0">
                <input
                  className="font-smooch text-1xl block w-full px-10 py-3 border border-gray-300 bg-gray-900 rounded-full focus:outline-none focus:border-blue-500 text-white mb-3"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                />
              </div>
              <button
                className="font-smooch block text-2xl bg-black hover:bg-white text-white hover:text-black rounded-full py-1 px-0 w-full m-0 font-bold"
                type="submit"
              >
                INGRESAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
