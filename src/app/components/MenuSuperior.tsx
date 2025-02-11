import { HiArrowSmallLeft } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function MenuSuperior() {
    return(
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-0 fixed top-0 right-0 m-0 bg-white bg-opacity-50 text-white p-5'>
          <div className="m-0 p-0 flex justify-center align-middle">
            <Link href='/' className="m-0 p-0 flex justify-center">
              <HiArrowSmallLeft size={40} className="text-gray-900 border-2 border-gray-900 rounded-full" />
            </Link>
          </div>
          <div className="m-0 p-0 flex justify-center align-middle">
            <Link href='/'>
              <FaHome size={43} className="text-gray-900 border-2 border-gray-900 rounded-full p-1" />
            </Link>
          </div>
          <div className="m-0 p-0 flex justify-center align-middle">
            <Link href='/'>
              <FaUserCircle size={45} className="text-gray-900 border-2 border-gray-900 rounded-full p-1" />
            </Link>
          </div>
          <div className="m-0 p-0 flex justify-center align-middle">
            <Link href={`/`}>
              <Image
                src='/logo_seoc_completo.svg'
                width='100'
                height='100'
                alt="seoc"
              />
            </Link>
          </div>
        </div>
    )
}